import type { FC } from "react"
import { CircularProgress, useTheme } from "@mui/material"

import { StyledButtonLoaderWrapper } from "./ButtonLoader.styles";
import type { ButtonLoaderProps } from "./ButtonLoader.types";

export const ButtonLoader: FC<ButtonLoaderProps> = ({
  position = "suffix",
  ...props
}) => {
  const theme = useTheme()

  const defaultProps = {
    size: theme.spacing(2),
    thickness: 5
  }

  return (
    <StyledButtonLoaderWrapper
      mr={position === "prefix" ? 1 : 0}
      ml={position === "suffix" ? 1 : 0}
    >
      <CircularProgress
        {...defaultProps}
        {...props}
        color="inherit"
      />
    </StyledButtonLoaderWrapper>
  )
}
