import { apiService } from "@/api/api.service";
import { clearSession, setAccessToken, setUserData } from "@/store/auth/auth.slice";

import { loginConfig, registerConfig } from "./auth.config";
import type { LoginPostModel, LoginResponseModel } from "./auth.types";
import { UsersApi } from "../users/users.api";
import type { UserPostModel, UserResponseModel } from "../users/users.types";

export const AuthApi = apiService
  .injectEndpoints({
    endpoints: build => ({
      register: build.mutation<UserResponseModel, UserPostModel>({
        query: (body) => ({
          ...registerConfig,
          body
        }),
      }),

      login: build.mutation<LoginResponseModel, LoginPostModel>({
        query: ({ email, password }) => ({
          ...loginConfig,
          body: {
            email,
            password,
          }
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data: { accessToken } } = await queryFulfilled
            dispatch(setAccessToken(accessToken))

            const userData = await dispatch(UsersApi.endpoints.getUserData.initiate()).unwrap()
            dispatch(setUserData(userData))
          } catch {
            dispatch(clearSession())
          }
        },
      })
    }),
  });

export const {
  useRegisterMutation,
  useLoginMutation,
} = AuthApi