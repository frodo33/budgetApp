import type { RequestConfig } from "@/api/api.types";

export const registerConfig: RequestConfig = {
  method: "POST",
  url: "/auth/register",
}

export const loginConfig: RequestConfig = {
  method: "POST",
  url: "/auth/login",
  credentials: "include",
}

export const refreshTokenConfig: RequestConfig = {
  method: "POST",
  url: "/auth/refresh-token",
  credentials: "include",
}

export const logoutConfig: RequestConfig = {
  method: "POST",
  url: "/auth/logout",
  credentials: "include",
}