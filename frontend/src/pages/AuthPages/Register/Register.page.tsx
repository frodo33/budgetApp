import type { FC } from "react";
import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { PublicPageWrapper } from "@/components/layouts/PublicLayout/PublicLayout.styles";

import { RegisterForm } from "./RegisterForm/RegisterForm.component";

export const RegisterPage: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"))
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <PublicPageWrapper>
      <Paper sx={{ minWidth: isMdUp ? 450 : "100%" }}>
        <Typography
          component="h1"
          variant={isSmUp ? "h1" : "h2"}
          align="center"
        >
          {t("user:createAccount")}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={3}
        >
          {t("user:createAccountDetails")}
        </Typography>

        <RegisterForm />

        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {t("user:alreadyHaveAccount")}
          </Typography>&nbsp;

          <Button
            variant="text"
            onClick={() => void navigate("/login")}
          >
            {t("user:login")}
          </Button>
        </Box>
      </Paper>
    </PublicPageWrapper >
  )
}
