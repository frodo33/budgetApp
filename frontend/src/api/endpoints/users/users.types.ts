export type UserPostModel = {
  username?: string | null
  email: string
  password: string
}

export type UserResponseModel = {
  id: number | null
  username: string
  email: string
}