import type { FC } from "react";
import { Box, Button, Divider, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { PublicPageWrapper } from "@/components/layouts/PublicLayout/PublicLayout.styles";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/routes";

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

        <Divider sx={{ mt: 3, mb: 2 }} />

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
            onClick={() => navigate(getPath(RoutePath.LOGIN, true))}
          >
            {t("user:signIn")}
          </Button>
        </Box>
      </Paper>
    </PublicPageWrapper >
  )
}
