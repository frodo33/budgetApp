import { validate } from "class-validator";
import bcrypt from "bcryptjs"

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { generateAuthTokens } from "../authToken.service";
import { findUser } from "../../users/users.repository";
import { formatValidationErrors } from "../../../utils/errorHandler.utils";
import { cleanOldRefreshTokens } from "../../userRefreshTokens/userRefreshTokens.repository";

import { LoginDto } from "./login.dto";

export const loginUser = async (credentials: LoginDto) => {
  const { email, password } = credentials
  const errors = await validate(credentials)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUser({ email })
  if (!user) throw createUnauthorizedError("Email or password is invalid.")

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw createUnauthorizedError("Email or password is invalid.")

  await cleanOldRefreshTokens(user.id)
  const tokens = await generateAuthTokens(user.id)

  return tokens
}