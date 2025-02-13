import { Box, styled } from "@mui/material";

export const StyledAppHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  top: 0,
  padding: theme.spacing(1, 0),
  marginBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.grey.light}`,
  display: "flex",
  zIndex: 2,
  alignContent: "space-between",
  alignItems: "center",
}))

export const StyledImgWrapper = styled(Box)(({
  maxWidth: "200px",
  display: "flex",
  alignItems: "center",
  "& img": { width: "100%" }
}))