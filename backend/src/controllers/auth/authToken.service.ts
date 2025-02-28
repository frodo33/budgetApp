import { sign } from "jsonwebtoken"

import { envConfig } from "../../config/env"
import { saveRefreshToken } from "../userRefreshTokens/userRefreshTokens.repository"

export const generateAuthTokens = async (userId: number) => {
  const accessToken = sign(
    { userId },
    envConfig.jwt.accessTokenSecret,
    {
      subject: "accessApi",
      expiresIn: envConfig.jwt.accessTokenExpiresIn,
    }
  )

  const refreshToken = sign(
    { userId },
    envConfig.jwt.refreshTokenSecret,
    {
      subject: "refreshToken",
      expiresIn: envConfig.jwt.refreshTokenExpiresIn,
    }
  )

  await saveRefreshToken(
    refreshToken,
    userId,
  )

  return {
    accessToken,
    refreshToken,
  }
}