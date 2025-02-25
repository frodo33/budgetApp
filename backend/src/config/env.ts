export const envConfig = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "",
  accessTokenExpiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN) || (60 * 60),
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
  refreshTokenExpiresIn: Number(process.env.REFRESH_TOKEN_EXPIRES_IN) || (24 * 60 * 60),
  database: {
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    name: process.env.DB_NAME || "",
    port: process.env.DB_PORT || "",
  },
};