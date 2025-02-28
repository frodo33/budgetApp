import { JwtPayload, verify } from "jsonwebtoken";

import { createUnauthorizedError } from "../../../utils/errorHandler";
import { deleteRefreshTokenById, findRefreshToken } from "../../userRefreshTokens/userRefreshTokens.repository";
import { generateAuthTokens } from "../authToken.service";
import { envConfig } from "../../../config/env";

export const handleRefreshToken = async (refreshToken: string) => {
  if (!refreshToken) {
    throw createUnauthorizedError("Refresh token invalid or expired")
  }

  const decodedRefreshToken = verify(refreshToken, envConfig.jwt.refreshTokenSecret) as JwtPayload
  const userRefreshToken = await findRefreshToken(refreshToken, decodedRefreshToken.userId)

  if (!userRefreshToken) {
    throw createUnauthorizedError("Refresh token invalid or expired")
  }

  await deleteRefreshTokenById(userRefreshToken.id)
  const tokens = await generateAuthTokens(decodedRefreshToken.userId)

  return tokens
}