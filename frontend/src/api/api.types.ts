export type RequestConfig = {
  method: "GET" | "POST" | "PUT" | "DELETE"
  url: string
  headers?: Record<string, string>
  credentials?: RequestCredentials
}

export type ApiError = {
  status: number
  data: {
    title: string
    status: number
    detail: string
    errors?: Record<string, string[]>
  }
}