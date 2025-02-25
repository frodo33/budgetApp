import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "dotenv/config";

import { db } from "./config/datasource";
import { router } from "./router";

db
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(cors({
  origin: "https://localhost:3000", // TODO: set as env
  credentials: true,
}));

app.use(cookieParser())
app.use(express.json());
app.use("/api", router)

export default app;