import { Request } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

import { createUnauthorizedError } from "../../../utils/errorHandler";
import { deleteRefreshTokenById, findRefreshToken } from "../../userRefreshTokens/userRefreshTokens.repository";
import { saveInvalidToken } from "../../userInvalidTokens/userInvalidTokens.repository";
import { envConfig } from "../../../config/env";

export const handleLogout = async (req: Request) => {
  const { refreshToken } = req.cookies

  if (!refreshToken) {
    throw createUnauthorizedError("Refresh token invalid or expired")
  }

  const decodedRefreshToken = verify(refreshToken, envConfig.jwt.refreshTokenSecret) as JwtPayload
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