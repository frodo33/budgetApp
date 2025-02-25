import { Router } from "express"

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import authRoutes from "./controllers/auth/auth.routes"
import usersRoutes from "./controllers/users/users.routes"

export const router = Router()

router.use("/auth", authRoutes)
router.use("/users", ensureAuthenticated, usersRoutes)