import { Request, Response } from "express";

import { HttpStatusCode } from "../../../../enums/httpStatus";

import { ResetPasswordDto } from "./resetPassword.dto";
import { resetPassword } from "./resetPassword.service";

export const resetPasswordController = async (req: Request, res: Response) => {
  try {
    const resetPasswordDto = Object.assign(new ResetPasswordDto(), req.body)
    await resetPassword(resetPasswordDto)

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: "Your password has been successfully updated."
    })
  } catch (error) {
    res.status(error.status).json(error)
  }
}