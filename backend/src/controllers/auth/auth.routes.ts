import express from "express";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

import { register } from "./register/register.controller";
import { login } from "./login/login.controller";
import { refreshToken } from "./refreshToken/refreshToken.controller";
import { logout } from "./logout/logout.controller";

export const authRoutes = express.Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.post("/refresh-token", refreshToken)
authRoutes.post("/logout", ensureAuthenticated, logout)

export default authRoutes