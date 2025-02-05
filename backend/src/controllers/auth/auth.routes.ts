import express from "express";

import { register } from "./auth.controller";

const authRoutes = express.Router()

authRoutes.post("/register", register)

export default authRoutes