import express from "express";

import { getCurrentUser } from "./users.controller";
import { changePassword } from "./changePassword/changePassword.controller";

const usersRoutes = express.Router()

usersRoutes.get("/current", getCurrentUser)
usersRoutes.post("/change-password", changePassword)

export default usersRoutes