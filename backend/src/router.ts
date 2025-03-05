import { Router } from "express"

import { authMiddleware } from "./middlewares/auth.middleware"
import authRoutes from "./controllers/auth/auth.routes"
import usersRoutes from "./controllers/users/users.routes"

export const router = Router()

router.use("/auth", authRoutes)
router.use("/users", authMiddleware, usersRoutes)