import type { FC } from "react";
import { Box, Button, styled, Typography, useColorScheme } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "16px",
  borderRadius: theme.shape.sm,
  boxShadow: theme.boxShadows.lg,
}))

export const DashboardPage: FC = () => {
  const { setMode } = useColorScheme()
  return (
    <>
      <Typography color="error.main" variant="h1" mb={2}>Dashboard</Typography>

      <Typography variant="h2" mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, saepe?</Typography>
      <Typography variant="h3" mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, saepe?</Typography>
      <Typography variant="body1" mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, saepe?</Typography>
      <Typography variant="body2" mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, saepe?</Typography>
      <Typography variant="body3" mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, saepe?</Typography>

      <StyledButton variant="contained" size="small" onClick={() => setMode("system")}>system</StyledButton>
      <Box width={100} height={100} bgcolor="primary.main">asdf</Box>
      <StyledButton variant="contained" size="medium" onClick={() => setMode("dark")}>Dark</StyledButton>

      <StyledButton variant="contained" size="large" onClick={() => setMode("light")}>Light</StyledButton>

      <StyledButton variant="outlined" size="medium" onClick={() => setMode("system")}>System</StyledButton>
      <StyledButton variant="text" size="medium" onClick={() => setMode("system")}>system</StyledButton>
    </>
  )
}
