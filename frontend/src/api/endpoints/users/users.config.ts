import type { RequestConfig } from "@/api/api.types";

export const getUserDataConfig: RequestConfig = {
  method: "GET",
  url: "/users/current",
}