import { styled, Typography } from "@mui/material"

export const StyledInfoLabel = styled(
  Typography,
  { shouldForwardProp: (prop) => prop !== "invalid" }
)<{ invalid: boolean }>(({ theme, invalid }) => ({
  display: "block",
  marginTop: theme.spacing(.5),
  color: invalid ? theme.palette.error.main : theme.palette.grey.main,
}))
