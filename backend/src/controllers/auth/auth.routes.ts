import express from "express";

import { authMiddleware } from "../../middlewares/auth.middleware";

import { register } from "./register/register.controller";
import { login } from "./login/login.controller";
import { refreshToken } from "./refreshToken/refreshToken.controller";
import { logout } from "./logout/logout.controller";
import passwordRoutes from "./password/password.routes";

export const authRoutes = express.Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.post("/refresh-token", refreshToken)
authRoutes.post("/logout", authMiddleware, logout)

authRoutes.use("/password", passwordRoutes)

export default authRoutes