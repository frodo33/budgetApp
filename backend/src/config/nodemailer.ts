import nodemailer from "nodemailer"

import { envConfig } from "./env"

export const transporter = nodemailer.createTransport({
  host: envConfig.smtp.host,
  port: envConfig.smtp.port,
  auth: {
    user: envConfig.smtp.user,
    pass: envConfig.smtp.password,
  }
})