import { validate } from "class-validator";

import { createConflictError, createValidationError } from "../../../utils/errorHandler";
import { hashPassword } from "../auth.utils";
import { createUser, findUser } from "../../users/users.repository";
import { formatValidationErrors } from "../../../utils/errorHandler.utils";

import { CreateUserDto } from "./register.dto";

export const registerUser = async (userData: CreateUserDto) => {
  const { username, email, password } = userData
  const errors = await validate(userData)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    const validationError = createValidationError("There are validation errors", validationErrors)

    throw validationError;
  }

  const existingUser = await findUser({ email })
  if (existingUser) throw createConflictError("A user with this email already exists.")

  const hashedPassword = await hashPassword(password)
  return await createUser({ username, email, password: hashedPassword })
}