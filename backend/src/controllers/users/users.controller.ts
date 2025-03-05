import { Request, Response } from "express";

import { HttpStatusCode } from "../../enums/httpStatus";
import { createNotFoundError } from "../../utils/errorHandler";

import { findUser } from "./users.repository";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await findUser({ id: req.user.id })

    if (!user) {
      throw createNotFoundError("User not found")
    }

    res.status(HttpStatusCode.OK).json({
      id: user.id,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    res.status(error.status).json(error)
  }
}