import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";
import { envConfig } from "../../../config/env";

import { LoginDto } from "./login.dto";
import { loginUser } from "./login.service";

export const login = async (req: Request, res: Response) => {
  try {
    const userDto = Object.assign(new LoginDto(), req.body)
    const { accessToken, refreshToken } = await loginUser(userDto)

    res.cookie("refreshToken", refreshToken, {
      maxAge: envConfig.refreshTokenExpiresIn,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    res.status(HttpStatusCode.OK).json({ accessToken })
  } catch (error) {
    res.status(error.status).json(error)
  }
}