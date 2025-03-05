import { envConfig } from "../config/env"
import { transporter } from "../config/nodemailer"

export const sendEmail = async (to: string, subject: string, text?: string, html?: string) => {
  const mailOptions = {
    from: envConfig.smtp.from,
    to,
    subject,
    text,
    html,
  }

  await transporter.sendMail(mailOptions)
}