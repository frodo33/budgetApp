import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./controllers/auth/auth.routes";
import { db } from "./config/datasource";

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

app.use("/api/auth", authRoutes)

// example
// const router = Router();
// router.use('/auth', authRoutes);
// router.use('/user', userRoutes);
// router.use('/transactions', transactionsRoutes);
// app.use("/api/user", userRoutes)
// app.use("/api/transactions", transactionsRoutes)
// e/o example

export default app;