import { JsonWebTokenError, JwtPayload, TokenExpiredError, verify } from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

import { envConfig } from "../config/env"
import { findInvalidToken } from "../controllers/userInvalidTokens/userInvalidTokens.repository"
import { createServerError, createUnauthorizedError } from "../utils/errorHandler"
import { HttpStatusCode } from "../enums/httpStatus"

export const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.authorization

    if (!accessToken) {
      res.status(HttpStatusCode.UNAUTHORIZED).json(createUnauthorizedError("Access token not found"))
      return
    }

    const invalidToken = await findInvalidToken(accessToken)

    if (invalidToken) {
      res.status(HttpStatusCode.UNAUTHORIZED).json(createUnauthorizedError("Access token invalid"))
      return
    }

    const decodedAccessToken = verify(accessToken, envConfig.jwt.accessTokenSecret) as JwtPayload;

    req.accessToken = { value: accessToken, exp: decodedAccessToken.exp }
    req.user = { id: decodedAccessToken.userId }

    next()
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      res.status(HttpStatusCode.UNAUTHORIZED).json(createUnauthorizedError("Access token expired"))
    } else if (error instanceof JsonWebTokenError) {
      res.status(HttpStatusCode.UNAUTHORIZED).json(createUnauthorizedError("Access token invalid"))
    } else {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(createServerError(error.message))
    }
  }
}