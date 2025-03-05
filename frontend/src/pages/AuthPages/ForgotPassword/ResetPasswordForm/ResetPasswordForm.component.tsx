import type { FC } from "react";
import { Box, Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { ButtonLoader } from "@/components/common/ButtonLoader/ButtonLoader.component";

import { useResetPasswordForm } from "./ResetPasswordForm.hook";
import { PasswordTextFieldController } from "../../@components/PasswordTextFieldController/PasswordTextFieldController.component";

export const ResetPasswordForm: FC<{ token: string }> = ({ token }) => {
  const { t } = useTranslation()
  const { form, handleSubmit, isLoading } = useResetPasswordForm(token)

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Box mb={2}>
          <PasswordTextFieldController
            name="password"
            label={t("form:label:password")}
            placeholder={t("form:placeholder:password")}
          />
        </Box>

        <Box mb={3}>
          <PasswordTextFieldController
            name="confirmPassword"
            label={t("form:label:confirmPassword")}
            placeholder={t("form:placeholder:confirmPassword")}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          endIcon={isLoading ? <ButtonLoader /> : null}
        >
          {t("user:setPassword")}
        </Button>
      </Box>
    </FormProvider>
  )
}
