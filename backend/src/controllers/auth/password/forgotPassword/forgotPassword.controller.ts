import { Request, Response } from "express";

import { HttpStatusCode } from "../../../../enums/httpStatus";

import { ForgotPasswordDto } from "./forgotPassword.dto";
import { sendResetPasswordEmail } from "./forgotPassword.service";

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const forgotPasswordDto = Object.assign(new ForgotPasswordDto(), req.body)
    await sendResetPasswordEmail(forgotPasswordDto)

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: "A password reset link has been sent to your email."
    })
  } catch (error) {
    res.status(error.status).json(error)
  }
}