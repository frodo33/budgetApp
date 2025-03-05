import { useState } from "react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { ApiError } from "@/api/api.types";
import { setFormErrors } from "@/api/api.utils";
import { useForgotPasswordMutation } from "@/api/endpoints/auth/auth.api";
import { useYupResolver } from "@/hooks/useYupResolver";

import { ForgotPasswordFormSchema } from "./ForgotPasswordForm.schema";
import type { ForgotPasswordFormState } from "./ForgotPasswordForm.types";

export const useForgotPasswordForm = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()
  const [emailSent, setEmailSent] = useState(false)

  const form = useForm<ForgotPasswordFormState>({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: useYupResolver(ForgotPasswordFormSchema),
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    const { email } = values

    try {
      const { message } = await forgotPassword({ email }).unwrap()
      setEmailSent(true)
      enqueueSnackbar(message, { variant: "success" })
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
    emailSent,
  }
}
