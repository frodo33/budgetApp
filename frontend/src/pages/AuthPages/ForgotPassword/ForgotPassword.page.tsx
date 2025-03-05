import type { FC } from "react";
import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";

import { PublicPageWrapper } from "@/components/layouts/PublicLayout/PublicLayout.styles";

import { ForgotPasswordForm } from "./ForgotPasswordForm/ForgotPasswordForm.component";
import { ResetPasswordForm } from "./ResetPasswordForm/ResetPasswordForm.component";

export const ForgotPasswordPage: FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"))
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")

  return (
    <PublicPageWrapper>
      <Paper sx={{ width: isMdUp ? 450 : "100%" }}>
        <Typography
          component="h1"
          variant={isSmUp ? "h1" : "h2"}
          align="center"
        >
          {token
            ? t("user:resetPasswordTitle")
            : t("user:forgotPasswordTitle")
          }
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={3}
        >
          {token
            ? t("user:resetPasswordDetails")
            : t("user:forgotPasswordDetails")
          }
        </Typography>

        {token
          ? <ResetPasswordForm token={token} />
          : <ForgotPasswordForm />}
      </Paper>
    </PublicPageWrapper >
  )
}
