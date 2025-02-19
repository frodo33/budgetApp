import type { FC } from "react";
import { Box, Paper, Typography, useColorScheme } from "@mui/material";
import { FaLock } from "react-icons/fa6";

import { TextField } from "@/components/form/TextField/TextField.component";

export const LoginPage: FC = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"

    >
      <Paper>
        <button onClick={() => setMode("light")}>light</button>
        <button onClick={() => setMode("dark")}>dark</button>
        <Typography variant="h1">Login</Typography>

        <Box>
          <TextField
            label="Test"
            startAdornment={<FaLock />}
          />
        </Box>

        <Box>
          <TextField
            label="Username"
            helperText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam labore obcaecati error est enim, laboriosam rerum voluptate nostrum velit qui."
            error={true}
            endAdornment={<FaLock />}
            placeholder="Test"
          />
        </Box>

        <Box>
          <TextField
            label="Password"
            size="small"
            helperText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam labore obcaecati error est enim, laboriosam rerum voluptate nostrum velit qui."
            placeholder="Test"
          />
        </Box>

        <Box>
          <TextField
            label="Test"
            size="small"
            helperText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam labore obcaecati error est enim, laboriosam rerum voluptate nostrum velit qui."
            disabled
            placeholder="Test"
          />
        </Box>
      </Paper>
    </Box>
  )
}
