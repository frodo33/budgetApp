import { CookieOptions } from "express";

export const envConfig = {
  nodeEnv: process.env.NODE_ENV || "dev",
  port: process.env.PORT,
  clientUrl: process.env.CLIENT_URL || "",
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "",
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
      ? Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
      : 60 * 60,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
      ? Number(process.env.REFRESH_TOKEN_EXPIRES_IN)
      : 24 * 60 * 60,
  },
  database: {
    url: process.env.DB_URL || "",
  },
  cookies: {
    cookieSecure: process.env.COOKIE_SECURE === "true",
    cookieSameSite: process.env.COOKIE_SAME_SITE as CookieOptions["sameSite"] || "none"
  }
};
