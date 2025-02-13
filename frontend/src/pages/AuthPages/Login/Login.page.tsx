import type { FC } from "react";
import { Box, Button, Paper, Typography, useColorScheme, useTheme } from "@mui/material";

// button
// inputs
// terms
// button do register
// button do forgot-password
// 

export const LoginPage: FC = () => {
  const { mode, setMode } = useColorScheme()
  const theme = useTheme()
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"

    >
      <Paper
        sx={{
          minWidth: "550px",

          p: 3,
          borderRadius: theme.shape.lg,
          boxShadow: theme.boxShadows.md,
        }}
      >
        <button onClick={() => setMode("light")}>light</button>
        <button onClick={() => setMode("dark")}>dark</button>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h1">Login</Typography>

        <Button variant="contained">Save</Button>
        <Button variant="outlined">Log in</Button>
      </Paper>
    </Box>
  )
}
