/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_HOST_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
