import { configureStore } from "@reduxjs/toolkit";

import { apiService } from "@/api/api.service.ts";

import authReducer from "./auth/auth.slice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiService.reducerPath]: apiService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware)
})
