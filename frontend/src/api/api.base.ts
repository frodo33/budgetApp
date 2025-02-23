import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { envConfig } from "@/app.config";
import type { RootState } from "@/store/store.types";

export const baseQuery = fetchBaseQuery({
  baseUrl: envConfig.API_HOST_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("Authorization", token);
    }

    headers.set("Content-Type", "application/json")

    return headers;

  }
})