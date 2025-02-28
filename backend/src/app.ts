import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { db } from "./config/datasource";
import { router } from "./router";
import { envConfig } from "./config/env";

db
  .initialize()
  .then(() => console.log("Data Source has been initialized!"))
  .catch((err) => console.error("Error during Data Source initialization:", err))

const app = express();

app.use(cors({
  origin: envConfig.clientUrl,
  credentials: true,
}));

app.use(cookieParser())
app.use(express.json());
app.use("/api", router)

export default app;