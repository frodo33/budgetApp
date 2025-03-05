import type { TFunction } from "i18next"
import * as yup from "yup"

import type { ForgotPasswordFormState } from "./ForgotPasswordForm.types"

export const ForgotPasswordFormSchema = (t: TFunction): yup.ObjectSchema<ForgotPasswordFormState> => (
  yup.object().shape({
    email: yup
      .string()
      .email(t("errors:validation:email"))
      .required(t("errors:validation:requiredField")),
  })
)