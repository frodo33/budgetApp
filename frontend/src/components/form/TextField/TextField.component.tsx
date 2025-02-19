import type { FC } from "react"
import { InputAdornment, TextField as MuiTextField } from "@mui/material"

import { InfoLabel } from "./InfoLabel/InfoLabel.component"
import type { TextFieldProps } from "./TextField.types"

export const TextField: FC<TextFieldProps> = ({
  label,
  required = false,
  error,
  helperText,
  startAdornment,
  endAdornment,
  onBlur,
  ...props
}) => (
  <MuiTextField
    size="small"
    label={required ? `${label} *` : label}
    onBlur={onBlur}
    error={error}
    helperText={
      helperText
        ? (
          <InfoLabel invalid={error}>
            {helperText}
          </InfoLabel>
        )
        : null
    }
    slotProps={{
      input: {
        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }
    }}
    {...props}
  />
)
