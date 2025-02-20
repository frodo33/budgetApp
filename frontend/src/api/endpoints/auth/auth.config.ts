import type { RequestConfig } from "@/api/api.types";

export const registerConfig: RequestConfig = {
  method: "POST",
  url: "/auth/register",
}