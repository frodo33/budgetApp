import type { FC } from "react";
import { Box, Button, Divider } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { ButtonLoader } from "@/components/common/ButtonLoader/ButtonLoader.component";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";

import { useRegisterForm } from "./RegisterForm.hook";
import { PasswordTextFieldController } from "../../@components/PasswordTextFieldController/PasswordTextFieldController.component";

export const RegisterForm: FC = () => {
  const { t } = useTranslation()
  const { form, handleSubmit, isLoading } = useRegisterForm()

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Box mb={2}>
          <TextFieldController
            name="username"
            label={t("form:label:username")}
            placeholder={t("form:placeholder:username")}
          />
        </Box>

        <Box mb={2}>
          <TextFieldController
            name="email"
            label={t("form:label:email")}
            placeholder={t("form:placeholder:email")}
          />
        </Box>

        <Box mb={2}>
          <PasswordTextFieldController
            name="password"
            label={t("form:label:password")}
            placeholder={t("form:placeholder:password")}
          />
        </Box>

        <Box mb={2}>
          <PasswordTextFieldController
            name="confirmPassword"
            label={t("form:label:confirmPassword")}
            placeholder={t("form:placeholder:confirmPassword")}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
          endIcon={isLoading ? <ButtonLoader /> : null}
        >
          {t("user:register")}
        </Button>
      </Box>
    </FormProvider>
  )
}
