import { Request, Response } from "express";

import { HttpStatusCode } from "../../../enums/httpStatus";

import { handleLogout } from "./logout.service";

export const logout = async (req: Request, res: Response) => {
  try {
    await handleLogout(req)

    res.clearCookie("refreshToken")
    res.status(HttpStatusCode.NO_CONTENT).end()
  } catch (error) {
    res.status(error.status).json(error)
  }
}