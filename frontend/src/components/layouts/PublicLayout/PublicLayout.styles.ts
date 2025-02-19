import { Box, Container, styled } from "@mui/material";

export const StyledContentLayer = styled(Box)(({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: "100vh",
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.background.default,
}))
