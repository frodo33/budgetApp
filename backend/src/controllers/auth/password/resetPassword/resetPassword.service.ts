import { validate } from "class-validator";

import { createBadRequestError, createValidationError } from "../../../../utils/errorHandler";
import { findUser, updateUser } from "../../../users/users.repository";
import { formatValidationErrors } from "../../../../utils/errorHandler.utils";
import { hashPassword } from "../../auth.utils";

import { ResetPasswordDto } from "./resetPassword.dto";

export const resetPassword = async (payload: ResetPasswordDto) => {
  const { token, newPassword } = payload
  const errors = await validate(payload)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUser({ resetPasswordToken: token })
  if (!user || !user.resetPasswordToken || user.resetPasswordTokenExpires < new Date()) {
    throw createBadRequestError("Invalid or expired token")
  }

  const hashedPassword = await hashPassword(newPassword)

  await updateUser(user.id, {
    password: hashedPassword,
    resetPasswordToken: null,
    resetPasswordTokenExpires: null,
  })
}