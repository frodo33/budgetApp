import { DataSource } from "typeorm"

import "dotenv/config";
import { envConfig } from "./env"

export const db = new DataSource({
  type: "mysql",
  url: envConfig.database.url,
  entities: [__dirname + "/../entities/*.{ts,js}"],
  migrations: [__dirname + "/../migrations/*.{ts,js}"],
  logging: envConfig.nodeEnv === "dev",
  synchronize: false,
})
