import { validate } from "class-validator";
import bcrypt from "bcryptjs"

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { generateAuthTokens } from "../authToken.service";
import { findUserByEmail } from "../../users/users.repository";
import { formatValidationErrors } from "../../../utils/errorHandler.utils";

import { LoginDto } from "./login.dto";

export const loginUser = async (credentials: LoginDto) => {
  const { email, password } = credentials
  const errors = await validate(credentials)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUserByEmail(email)
  if (!user) throw createUnauthorizedError("Email or password is invalid.")

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw createUnauthorizedError("Email or password is invalid.")

  const tokens = await generateAuthTokens(user.id)

  return tokens
}