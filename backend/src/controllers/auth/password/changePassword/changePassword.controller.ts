import { Request, Response } from "express";

import { HttpStatusCode } from "../../../../enums/httpStatus";

import { ChangePasswordDto } from "./changePassword.dto";
import { changePassword } from "./changePassword.service";

export const changePasswordController = async (req: Request, res: Response) => {
  try {
    const userDto = Object.assign(new ChangePasswordDto(), req.body)
    await changePassword(userDto, req.user.id)

    res.status(HttpStatusCode.NO_CONTENT).end()
  } catch (error) {
    res.status(error.status).json(error)
  }
}