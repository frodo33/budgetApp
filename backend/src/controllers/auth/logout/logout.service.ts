import { validate } from "class-validator";
import { Request } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { deleteRefreshTokenById, findRefreshToken } from "../../userRefreshTokens/userRefreshTokens.repository";
import { saveInvalidToken } from "../../userInvalidTokens/userInvalidTokens.repository";
import { envConfig } from "../../../config/env";
import { formatValidationErrors } from "../../../utils/errorHandler.utils";

import { LogoutDto } from "./logout.dto";

export const handleLogout = async (req: Request, body: LogoutDto) => {
  const { refreshToken } = body
  const errors = await validate(body)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const decodedRefreshToken = verify(refreshToken, envConfig.refreshTokenSecret) as JwtPayload
  const userRefreshToken = await findRefreshToken(refreshToken, decodedRefreshToken.userId)

  if (!userRefreshToken) {
    throw createUnauthorizedError("Refresh token invalid or expired")
  }

  await deleteRefreshTokenById(userRefreshToken.id)

  const expiresAtDate = new Date(req.accessToken.exp * 1000)

  await saveInvalidToken(
    req.accessToken.value,
    req.user.id,
    expiresAtDate,
  )
}