import { Button, styled } from "@mui/material";

export const StyledEyeButton = styled(Button)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary
}))