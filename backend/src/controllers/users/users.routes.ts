import express from "express";

import { getCurrentUser } from "./users.controller";

const usersRoutes = express.Router()

usersRoutes.get("/current", getCurrentUser)

export default usersRoutes