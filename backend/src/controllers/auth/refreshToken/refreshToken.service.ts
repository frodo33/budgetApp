import { JwtPayload, verify } from "jsonwebtoken";
import { validate } from "class-validator";

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { deleteRefreshTokenById, findRefreshToken } from "../../userRefreshTokens/userRefreshTokens.repository";
import { generateAuthTokens } from "../authToken.service";
import { envConfig } from "../../../config/env";

import { RefreshTokenDto } from "./refreshToken.dto";

export const handleRefreshToken = async (body: RefreshTokenDto) => {
  const { refreshToken } = body
  const errors = await validate(body)

  if (errors.length > 0) {
    const validationErrors = errors.map((err) => ({
      field: err.property,
      errors: err.constraints
    }));

    throw createValidationError("There are validation errors", validationErrors)
  }

  const decodedRefreshToken = verify(refreshToken, envConfig.refreshTokenSecret) as JwtPayload
  const userRefreshToken = await findRefreshToken(refreshToken, decodedRefreshToken.userId)

  if (!userRefreshToken) {
    throw createUnauthorizedError("Refresh token invalid or expired")
  }

  await deleteRefreshTokenById(userRefreshToken.id)
  const tokens = await generateAuthTokens(decodedRefreshToken.userId)

  return tokens
}