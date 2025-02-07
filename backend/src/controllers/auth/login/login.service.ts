import { validate } from "class-validator";
import bcrypt from "bcryptjs"

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { findUserByEmail } from "../auth.repository";
import { generateAuthTokens } from "../authToken.service";

import { LoginDto } from "./login.dto";

export const loginUser = async (credentials: LoginDto) => {
  const { email, password } = credentials
  const errors = await validate(credentials)

  if (errors.length > 0) {
    const validationErrors = errors.map((err) => ({
      field: err.property,
      errors: err.constraints
    }));

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUserByEmail(email)
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!user || !passwordMatch) throw createUnauthorizedError("Email or password is invalid.")

  const tokens = await generateAuthTokens(user.id)

  return tokens
}