import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";

import { handleRefreshToken } from "./refreshToken.service";
import { RefreshTokenDto } from "./refreshToken.dto";

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshTokenDto = Object.assign(new RefreshTokenDto(), req.body)
    const tokens = await handleRefreshToken(refreshTokenDto)

    res.status(HttpStatusCode.OK).json(tokens)
  } catch (error) {
    res.status(500).json(error)
  }
}