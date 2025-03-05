import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import type { ApiError } from "@/api/api.types";
import { setFormErrors } from "@/api/api.utils";
import { useResetPasswordMutation } from "@/api/endpoints/auth/auth.api";
import { useYupResolver } from "@/hooks/useYupResolver";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/routes";

import { ResetPasswordFormSchema } from "./ResetPasswordForm.schema";
import type { ResetPasswordFormState } from "./ResetPasswordForm.types";

export const useResetPasswordForm = (token: string) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const form = useForm<ResetPasswordFormState>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: useYupResolver(ResetPasswordFormSchema),
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    const { password } = values

    try {
      const { message } = await resetPassword({ token, newPassword: password }).unwrap()
      enqueueSnackbar(message, { variant: "success" })
      await navigate(getPath(RoutePath.LOGIN, true), { replace: true })
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
