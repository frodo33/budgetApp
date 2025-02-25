import type { FC } from "react";
import { Box, Button, Typography, useColorScheme } from "@mui/material";
import { useNavigate } from "react-router";

import { useLogoutMutation, useRefreshTokenMutation } from "@/api/endpoints/auth/auth.api";
import { useLazyGetUserDataQuery } from "@/api/endpoints/users/users.api";

export const DashboardPage: FC = () => {
  const { setMode } = useColorScheme()
  const navigate = useNavigate()
  const [refreshToken] = useRefreshTokenMutation()
  const [logout] = useLogoutMutation()
  const [getUserData] = useLazyGetUserDataQuery()

  return (
    <>
      <Typography color="error.main" variant="h1" mb={2}>Dashboard</Typography>

      <Box>
        <Button onClick={() => refreshToken()}>refresh</Button>
        <Button onClick={() => logout()}>logout</Button>
        <Button onClick={() => getUserData()}>getUserData</Button>
        <Button onClick={() => navigate("/login")}>login</Button>
        <Button onClick={() => navigate("/register")}>register</Button>
        <Button onClick={() => setMode("dark")}>Dark</Button>
        <Button onClick={() => setMode("light")}>Light</Button>
      </Box>
    </>
  )
}
