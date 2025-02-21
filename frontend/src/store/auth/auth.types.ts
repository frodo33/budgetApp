import type { UserResponseModel } from "@/api/endpoints/user/user.types"

export type AuthState = {
  accessToken: string | null
  userData: UserResponseModel
}