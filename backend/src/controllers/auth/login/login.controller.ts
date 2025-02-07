import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";

import { LoginDto } from "./login.dto";
import { loginUser } from "./login.service";

export const login = async (req: Request, res: Response) => {
  try {
    const userDto = Object.assign(new LoginDto(), req.body)
    const tokens = await loginUser(userDto)

    res.status(HttpStatusCode.OK).json(tokens)
  } catch (error) {
    res.status(error.status).json(error)
  }
}