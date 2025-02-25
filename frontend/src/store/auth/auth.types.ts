import type { UserResponseModel } from "@/api/endpoints/users/users.types"

export type AuthState = {
  dataLoaded: boolean
  accessToken: string | null
  userData: UserResponseModel
}