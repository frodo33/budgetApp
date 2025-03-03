import { validate } from "class-validator";
import bcrypt from "bcryptjs"

import { createUnauthorizedError, createValidationError } from "../../../utils/errorHandler";
import { findUserById, updateUserPassword } from "../users.repository";
import { formatValidationErrors } from "../../../utils/errorHandler.utils";
import { cleanOldRefreshTokens } from "../../userRefreshTokens/userRefreshTokens.repository";
import { hashPassword } from "../../auth/auth.utils";

import { ChangePasswordDto } from "./changePassword.dto";

export const changeUserPassword = async (data: ChangePasswordDto, userId?: number) => {
  const { password, newPassword } = data
  const errors = await validate(data)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUserById(userId)
  if (!user) throw createUnauthorizedError("User not found")

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw createUnauthorizedError("Password is invalid.")

  await cleanOldRefreshTokens(userId)
  const hashedPassword = await hashPassword(newPassword)

  await updateUserPassword(userId, hashedPassword)
}