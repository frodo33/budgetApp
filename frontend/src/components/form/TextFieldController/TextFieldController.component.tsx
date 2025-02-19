import type { FC } from "react";
import { useController } from "react-hook-form";

import type { TextFieldControllerProps } from "./TextFieldController.types"
import { TextField } from "../TextField/TextField.component";

export const TextFieldController: FC<TextFieldControllerProps> = ({
  name,
  label,
  placeholder = label,
  fullWidth = true,
  disabled,
  required,
  ...props
}) => {
  const { field, fieldState: { error, invalid } } = useController({ name })

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      error={invalid}
      helperText={error?.message}
      fullWidth={fullWidth}
      {...field}
      ref={null}
      {...props}
    />
  )
}
