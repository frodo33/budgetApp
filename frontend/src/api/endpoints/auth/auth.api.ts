import { apiService } from "@/api/api.service";

import { loginConfig, registerConfig } from "./auth.config";
import type { UserPostModel, UserResponseModel } from "../user/user.types";

export const AuthApi = apiService
  .injectEndpoints({
    endpoints: build => ({
      register: build.mutation<UserResponseModel, UserPostModel>({
        query: (body) => ({
          ...registerConfig,
          body
        }),
      }),

      login: build.mutation<UserResponseModel, UserPostModel>({
        query: (body) => ({
          ...loginConfig,
          body
        }),
      })
    }),
  });

export const {
  useRegisterMutation,
  useLoginMutation,
} = AuthApi