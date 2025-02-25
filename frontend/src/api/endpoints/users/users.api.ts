import { apiService } from "@/api/api.service";

import { getUserDataConfig } from "./users.config";
import type { UserResponseModel } from "./users.types";

export const UsersApi = apiService
  .injectEndpoints({
    endpoints: build => ({
      getUserData: build.query<UserResponseModel, void>({
        query: () => ({
          ...getUserDataConfig,
        }),
      }),
    }),
  });

export const {
  useGetUserDataQuery,
  useLazyGetUserDataQuery,
} = UsersApi