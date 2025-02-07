import express, { Router } from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./controllers/auth/auth.routes";
import { db } from "./config/datasource";
import usersRoutes from "./controllers/users/users.routes";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

db
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(cors());
app.use(express.json());

const router = Router()

router.use("/auth", authRoutes)
router.use("/users", usersRoutes)

app.use("/api", router)

export default app;