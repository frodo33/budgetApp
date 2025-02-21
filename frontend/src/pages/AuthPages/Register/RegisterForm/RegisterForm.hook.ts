import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import type { ApiError } from "@/api/api.types";
import { setFormErrors } from "@/api/api.utils";
import { useRegisterMutation } from "@/api/endpoints/auth/auth.api";
import { useYupResolver } from "@/hooks/useYupResolver";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/router/routes";

import { RegisterFormSchema } from "./RegisterForm.schema";
import type { RegisterFormState } from "./RegisterForm.types";

export const useRegisterForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [registerUser, { isLoading }] = useRegisterMutation()

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
      await navigate(getPath(RoutePath.LOGIN, true))
    } catch (error) {
      const err = error as ApiError
      const validationErrors = err?.data?.errors
      if (err.status === 422) {
        return setFormErrors(form.setError, validationErrors)
      }

      enqueueSnackbar(err?.data?.detail ?? t("errors:global"), { variant: "error" })
    }
  })

  return {
    form,
    handleSubmit,
    isLoading,
  }
}
