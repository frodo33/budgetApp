import type { FC } from "react";
import { Box, Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { ButtonLoader } from "@/components/common/ButtonLoader/ButtonLoader.component";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";

import { useLoginForm } from "./LoginForm.hook";
import { PasswordTextFieldController } from "../../@components/PasswordTextFieldController/PasswordTextFieldController.component";

export const LoginForm: FC = () => {
  const { t } = useTranslation()
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

        <Box mb={3}>
          <PasswordTextFieldController
            name="password"
            label={t("form:label:password")}
            placeholder={t("form:placeholder:password")}
          />
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
