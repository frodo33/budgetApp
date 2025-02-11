import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({ exclude: ["virtual:", "node_modules"] }),
      apply: "build",
    },
    {
      ...eslint({
        exclude: ["virtual:", "node_modules"],
        emitErrorAsWarning: true,
      }),
      apply: "serve",
      enforce: "post",
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    }
  },
  server: {
    host: "localhost",
    port: 3000,
    open: "https://localhost:3000",
    https: {
      key: "./.cert/key.pem",
      cert: "./.cert/cert.pem",
    },
  },
});
