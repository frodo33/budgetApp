import app from "./app";
import "dotenv/config";
import { envConfig } from "./config/env";

app.listen(envConfig.port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${envConfig.port}`);
});