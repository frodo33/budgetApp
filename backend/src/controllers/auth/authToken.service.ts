import { sign } from "jsonwebtoken"

import { envConfig } from "../../config/env"
import { saveRefreshToken } from "../userRefreshTokens/userRefreshTokens.repository"

export const generateAuthTokens = async (userId: number) => {
  const accessToken = sign(
    { userId },
    envConfig.accessTokenSecret,
    {
      subject: "accessApi",
      expiresIn: envConfig.accessTokenExpiresIn,
    }
  )

  const refreshToken = sign(
    { userId },
    envConfig.refreshTokenSecret,
    {
      subject: "refreshToken",
      expiresIn: envConfig.refreshTokenExpiresIn,
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