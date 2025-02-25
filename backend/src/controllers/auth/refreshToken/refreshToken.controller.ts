import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";
import { envConfig } from "../../../config/env";

import { handleRefreshToken } from "./refreshToken.service";

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken
    const { accessToken, refreshToken: newRefreshToken } = await handleRefreshToken(refreshToken)

    res.cookie("refreshToken", newRefreshToken, {
      maxAge: envConfig.refreshTokenExpiresIn * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    res.status(HttpStatusCode.OK).json({ accessToken })
  } catch (error) {
    res.status(error.status).json(error)
  }
}