declare namespace Express {
  export interface Request {
    accessToken?: {
      value: string
      exp: number
    }
    user?: { id: number }
  }
}