import type { ReactNode } from "react";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material"

export type TextFieldProps = MuiTextFieldProps & {
  label?: string
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}