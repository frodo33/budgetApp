export type RequestConfig = {
  method: "GET" | "POST" | "PUT" | "DELETE"
  url: string
  headers?: Record<string, string>
}