import express from "express";

import { authMiddleware } from "../../middlewares/auth.middleware";

import { register } from "./register/register.controller";
import { login } from "./login/login.controller";
import { refreshToken } from "./refreshToken/refreshToken.controller";
import { logout } from "./logout/logout.controller";

export const authRoutes = express.Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.post("/refresh-token", refreshToken)
authRoutes.post("/logout", authMiddleware, logout)

export default authRoutes