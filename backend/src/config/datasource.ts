import { DataSource } from "typeorm"

import { envConfig } from "./env"

export const db = new DataSource({
  type: "mysql",
  host: envConfig.database.host,
  port: Number(envConfig.database.port),
  username: envConfig.database.user,
  password: envConfig.database.password,
  database: envConfig.database.name,
  entities: ["src/entities/*.ts"],
  logging: true,
  synchronize: true,
})