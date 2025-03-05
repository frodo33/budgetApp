import type { FC } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { ButtonLoader } from "@/components/common/ButtonLoader/ButtonLoader.component";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/routes";

import { useLoginForm } from "./LoginForm.hook";
import { PasswordTextFieldController } from "../../@components/PasswordTextFieldController/PasswordTextFieldController.component";

export const LoginForm: FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const navigate = useNavigate()
  const { form, handleSubmit, isLoading } = useLoginForm()

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Box mb={2}>
          <TextFieldController
            name="email"
            label={t("form:label:email")}
            placeholder={t("form:placeholder:email")}
          />
        </Box>

        <Box>
          <PasswordTextFieldController
            name="password"
            label={t("form:label:password")}
            placeholder={t("form:placeholder:password")}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          mb={3}
        >
          <Button
            variant="text"
            sx={{ fontSize: theme.typography.body2.fontSize }}
            onClick={() => navigate(getPath(RoutePath.FORGOT_PASSWORD, true))}
          >
            Trouble logging in?
          </Button>
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          endIcon={isLoading ? <ButtonLoader /> : null}
        >
          {t("user:signIn")}
        </Button>
      </Box>
    </FormProvider>
  )
}
