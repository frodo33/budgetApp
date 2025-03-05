import express from "express";

import { authMiddleware } from "../../../middlewares/auth.middleware";

import { changePasswordController } from "./changePassword/changePassword.controller";
import { forgotPasswordController } from "./forgotPassword/forgotPassword.controller";
import { resetPasswordController } from "./resetPassword/resetPassword.controller";

export const passwordRoutes = express.Router()

passwordRoutes.post("/forgot", forgotPasswordController)
passwordRoutes.post("/reset", resetPasswordController)
passwordRoutes.post("/change", authMiddleware, changePasswordController)

export default passwordRoutes