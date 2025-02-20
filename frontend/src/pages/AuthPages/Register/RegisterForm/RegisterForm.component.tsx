import type { FC } from "react";
import { Box, Button, Divider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { useRegisterMutation } from "@/api/endpoints/auth/auth.api";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";
import { useYupResolver } from "@/hooks/useYupResolver";

import { RegisterFormSchema } from "./RegisterForm.schema";
import type { RegisterFormState } from "./RegisterForm.types";
import { PasswordTextFieldController } from "../../@components/PasswordTextFieldController/PasswordTextFieldController.component";

export const RegisterForm: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [registerUser] = useRegisterMutation()

  const form = useForm<RegisterFormState>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: useYupResolver(RegisterFormSchema),
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    const { username, email, password } = values

    try {
      await registerUser({ username, email, password }).unwrap()
      await navigate("/login")
    } catch (error) {
      console.log(error, "error")
    }
  })

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
        >
          {t("user:register")}
        </Button>
      </Box>
    </FormProvider>
  )
}
