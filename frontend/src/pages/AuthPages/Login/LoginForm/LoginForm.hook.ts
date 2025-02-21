import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import type { ApiError } from "@/api/api.types";
import { setFormErrors } from "@/api/api.utils";
import { useLoginMutation } from "@/api/endpoints/auth/auth.api";
import { useYupResolver } from "@/hooks/useYupResolver";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/router/routes";

import { LoginFormSchema } from "./LoginForm.schema";
import type { LoginFormState } from "./LoginForm.types";

export const useLoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [loginUser, { isLoading }] = useLoginMutation()

  const form = useForm<LoginFormState>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: useYupResolver(LoginFormSchema),
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    const { email, password } = values

    try {
      await loginUser({ email, password }).unwrap()
      await navigate(getPath(RoutePath.REGISTER, true))
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
