import express from "express";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

import { getCurrentUser } from "./users.controller";


const usersRoutes = express.Router()

usersRoutes.get("/current", ensureAuthenticated, getCurrentUser)

export default usersRoutes