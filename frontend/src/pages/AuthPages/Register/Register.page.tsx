import type { FC } from "react";
import { Box, Button, Divider, Paper, Typography, useColorScheme, useMediaQuery, useTheme } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa6";

import { TextField } from "@/components/form/TextField/TextField.component";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";
import { PublicPageWrapper } from "@/components/layouts/PublicLayout/PublicLayout.styles";

import { RegisterForm } from "./RegisterForm/RegisterForm.component";

export const RegisterPage: FC = () => {
  const { mode, setMode } = useColorScheme()
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"))
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <PublicPageWrapper>
      <Paper sx={{ minWidth: isMdUp ? 450 : "100%" }}
      >
        <Typography
          component="h1"
          variant={isSmUp ? "h1" : "h2"}
          align="center"
          mb={1}
        >
          Create a new account
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={3}
        >
          Enter your details to register
        </Typography>

        <RegisterForm />
      </Paper>
    </PublicPageWrapper>
  )
}
