import type { FC } from "react";
import { Box, Button, Divider, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { PublicPageWrapper } from "@/components/layouts/PublicLayout/PublicLayout.styles";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/routes";

import { LoginForm } from "./LoginForm/LoginForm.component";

export const LoginPage: FC = () => {
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
          {t("user:loginTitle")}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={3}
        >
          {t("user:loginDetails")}
        </Typography>

        <LoginForm />

        <Divider sx={{ mt: 3, mb: 2 }} />

        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {t("user:dontHaveAccount")}
          </Typography>&nbsp;

          <Button
            variant="text"
            onClick={() => navigate(getPath(RoutePath.REGISTER, true))}
          >
            {t("user:signUp")}
          </Button>
        </Box>
      </Paper>
    </PublicPageWrapper >
  )
}
