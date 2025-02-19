import type { CircularProgressProps } from "@mui/material"

export type ButtonLoaderProps = CircularProgressProps & {
  position?: "prefix" | "suffix" | "unset"
}