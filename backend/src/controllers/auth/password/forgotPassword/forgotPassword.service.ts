import crypto from "crypto"

import { validate } from "class-validator";

import { createUnauthorizedError, createValidationError } from "../../../../utils/errorHandler";
import { findUser, updateUser } from "../../../users/users.repository";
import { formatValidationErrors } from "../../../../utils/errorHandler.utils";
import { sendEmail } from "../../../../utils/email.service";
import { envConfig } from "../../../../config/env";

import { ForgotPasswordDto } from "./forgotPassword.dto";

export const sendResetPasswordEmail = async (payload: ForgotPasswordDto) => {
  const { email } = payload
  const errors = await validate(payload)

  if (errors.length > 0) {
    const validationErrors = formatValidationErrors(errors)

    throw createValidationError("There are validation errors", validationErrors)
  }

  const user = await findUser({ email })
  if (!user) throw createUnauthorizedError("Email or password is invalid.")

  const resetPasswordToken = crypto.randomBytes(32).toString("hex")
  const resetPasswordTokenExpires = new Date(Date.now() + 30 * 60 * 1000)

  await updateUser(user.id, { resetPasswordToken, resetPasswordTokenExpires })

  await sendEmail(
    email,
    "Reset your password",
    undefined,
    `<p>Hello,</p>
    <p>We received a request to reset the password for your account. If this was you, please click the link below to set a new password:</p>
    <a href="${envConfig.clientUrl}/forgot-password?token=${resetPasswordToken}">Reset Your Password</a>
    <p>If you did not request this, simply ignore this email. Your password remains unchanged.</p>
    <p>Best regards,<br>The YourApp Team</p>`
  )
}