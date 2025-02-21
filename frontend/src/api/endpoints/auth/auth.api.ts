import { apiService } from "@/api/api.service";

import { registerConfig } from "./auth.config";
import type { UserPostModel, UserResponseModel } from "../user/user.types";

export const AuthApi = apiService
  .injectEndpoints({
    endpoints: build => ({
      register: build.mutation<UserResponseModel, UserPostModel>({
        query: (body) => ({
          ...registerConfig,
          body
        }),
      })
    }),
  });

export const {
  useRegisterMutation,
} = AuthApi