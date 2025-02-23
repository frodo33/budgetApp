import type { UserResponseModel } from "@/api/endpoints/users/users.types"

export type AuthState = {
  accessToken: string | null
  userData: UserResponseModel
}