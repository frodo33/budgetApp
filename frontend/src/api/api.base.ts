import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { envConfig } from "@/app.config";

export const baseQuery = fetchBaseQuery({
  baseUrl: envConfig.API_HOST_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json")

    return headers
  }
})