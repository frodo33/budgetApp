import { Box, CircularProgress, circularProgressClasses, styled, Typography } from "@mui/material";

export const StyledDeterminateVariant = styled(CircularProgress)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.primary.light
}));

export const StyledIndeterminateVariant = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: "round",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.dark
}));

export const StyledWrapper = styled(
  Box,
  { shouldForwardProp: (prop) => prop !== "fullPage" }
)<{ fullPage: boolean }>(({ fullPage }) => {
  let fullPageVariantStyles = {}

  if (fullPage) {
    fullPageVariantStyles = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "100vh",
    }
  }
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    ...fullPageVariantStyles
  }
})