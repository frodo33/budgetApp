import { validate } from "class-validator";

import { createConflictError, createValidationError } from "../../../utils/errorHandler";
import { hashPassword } from "../auth.utils";
import { createUser, findUserByEmail } from "../../users/users.repository";

import { CreateUserDto } from "./register.dto";

export const registerUser = async (userData: CreateUserDto) => {
  const { username, email, password } = userData
  const errors = await validate(userData)

  if (errors.length > 0) {
    const validationErrors = errors.map((err) => ({
      field: err.property,
      errors: err.constraints
    }));

    const validationError = createValidationError("There are validation errors", validationErrors)

    throw validationError;
  }

  const existingUser = await findUserByEmail(email)
  if (existingUser) throw createConflictError("A user with this email already exists.")

  const hashedPassword = await hashPassword(password)
  return await createUser({ username, email, password: hashedPassword })
}