import express from "express";

import { authMiddleware } from "../../../middlewares/auth.middleware";
import { changePassword } from "../../users/changePassword/changePassword.controller";

import { forgotPassword } from "./forgotPassword/forgotPassword.controller";
import { resetPasswordController } from "./resetPassword/resetPassword.controller";

export const passwordRoutes = express.Router()

passwordRoutes.post("/forgot", forgotPassword)
passwordRoutes.post("/reset", resetPasswordController)
passwordRoutes.post("/change", authMiddleware, changePassword)

export default passwordRoutes