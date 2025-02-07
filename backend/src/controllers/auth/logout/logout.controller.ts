import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";

import { handleLogout } from "./logout.service";
import { LogoutDto } from "./logout.dto";

export const logout = async (req: Request, res: Response) => {
  try {
    const logoutDto = Object.assign(new LogoutDto(), req.body)
    await handleLogout(req, logoutDto)

    res.status(HttpStatusCode.OK).json("dupa")
  } catch (error) {
    res.status(error.status).json(error)
  }
}