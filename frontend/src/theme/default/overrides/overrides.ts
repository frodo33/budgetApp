import type { ComponentOverride } from "@/theme/theme.types"

import { MuiButton } from "./button"
import { MuiInputBase, MuiFormHelperText, MuiInputLabel, MuiOutlinedInput } from "./input"
import { MuiPaper } from "./paper"

export const overrides: ComponentOverride = {
  MuiButton,
  MuiPaper,
  MuiInputBase,
  MuiFormHelperText,
  MuiInputLabel,
  MuiOutlinedInput
}
