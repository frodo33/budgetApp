export type LoginPostModel = {
  email: string
  password: string
}

export type LoginResponseModel = {
  accessToken: string
}

export type ForgotPasswordPostModel = {
  email: string
}

export type ForgotPasswordResponseModel = {
  success: boolean
  message: string
}

export type ResetPasswordPostModel = {
  token: string
  newPassword: string
}

export type ResetPasswordResponseModel = {
  success: boolean
  message: string
}