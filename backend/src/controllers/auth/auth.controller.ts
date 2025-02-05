import { Request, Response } from "express";

import { HttpStatusCode } from "../../enums/httpStatus";

import { registerUser } from "./auth.service";
import { CreateUserDto } from "./auth.dto";

export const register = async (req: Request, res: Response) => {
  try {
    const userDto = Object.assign(new CreateUserDto(), req.body)
    const user = await registerUser(userDto)
    res.status(HttpStatusCode.CREATED).json({ message: "User registered successfully", userId: user.id })
  } catch (error) {
    res.status(error.status).json(error)
  }
}