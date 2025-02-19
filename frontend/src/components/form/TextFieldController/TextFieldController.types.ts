import type { UseControllerProps } from "react-hook-form";

import type { TextFieldProps } from "../TextField/TextField.types"

export type TextFieldControllerProps = UseControllerProps & TextFieldProps & {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}