import { validate } from "class-validator";
import bcrypt from "bcryptjs"

import { createUnauthorizedError, createValidationError } from "../../../../utils/errorHandler";
import { findUser, updateUser } from "../../../users/users.repository";
import { formatValidationErrors } from "../../../../utils/errorHandler.utils";
import { hashPassword } from "../../auth.utils";

import { ChangePasswordDto } from "./changePassword.dto";

export const changePassword = async (data: ChangePasswordDto, userId?: number) => {
  const { password, newPassword } = data
  const errors = await validate(data)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUser({ id: userId })
  if (!user) throw createUnauthorizedError("User not found")

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw createUnauthorizedError("Password is invalid.")

  const hashedPassword = await hashPassword(newPassword)

  await updateUser(userId, { password: hashedPassword })
}