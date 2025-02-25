import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import { envConfig } from "@/app.config";
import { clearSession } from "@/store/auth/auth.slice";
import type { RootState } from "@/store/store.types";

import { apiService } from "./api.service";
import type { RequestConfig } from "./api.types";
import type { AuthApi } from "./endpoints/auth/auth.api";
import { loginConfig, refreshTokenConfig } from "./endpoints/auth/auth.config";

const baseQuery = fetchBaseQuery({
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

export const baseQueryWithReauth: BaseQueryFn<
  RequestConfig,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (args.url === refreshTokenConfig.url || args.url === loginConfig.url) {
      api.dispatch(clearSession())
      return result
    }

    try {
      const typedApiService = apiService as typeof apiService & typeof AuthApi
      await api.dispatch(typedApiService.endpoints.refreshToken.initiate()).unwrap();
      result = await baseQuery(args, api, extraOptions);
    } catch {
      api.dispatch(clearSession())
    }
  }

  return result;
};