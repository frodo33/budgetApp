import { DataSource } from "typeorm"

import "dotenv/config";
import { envConfig } from "./env"

console.log("envConfig", envConfig)

export const db = new DataSource({
  type: "mysql",
  url: envConfig.database.url,
  entities: [__dirname + "/../entities/*.{ts,js}"],
  migrations: [__dirname + "/../migrations/*.{ts,js}"],
  logging: envConfig.nodeEnv === "dev",
  synchronize: false,
  // ssl: envConfig.nodeEnv === "prod" ? { rejectUnauthorized: true } : false,
})
