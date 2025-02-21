import type { TFunction } from "i18next"
import * as yup from "yup"

import type { LoginFormState } from "./LoginForm.types"

export const LoginFormSchema = (t: TFunction): yup.ObjectSchema<LoginFormState> => (
  yup.object().shape({
    email: yup
      .string()
      .email(t("errors:validation:email"))
      .required(t("errors:validation:requiredField")),
    password: yup
      .string()
      .required(t("errors:validation.requiredField"))
  })
)