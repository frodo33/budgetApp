import type { TFunction } from "i18next"
import * as yup from "yup"

import type { RegisterFormState } from "./RegisterForm.types"

const PASSWORD_LENGTH = 8

export const RegisterFormSchema = (t: TFunction): yup.ObjectSchema<RegisterFormState> => (
  yup.object().shape({
    username: yup
      .string(),
    email: yup
      .string()
      .email(t("errors:validation:email"))
      .required(t("errors:validation:requiredField")),
    password: yup
      .string()
      .required(t("errors:validation.requiredField"))
      .min(PASSWORD_LENGTH, t("errors:validation:passwordLength", { count: PASSWORD_LENGTH })),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("errors:validation:passwordNotMatch"))
      .required(t("errors:validation:requiredField"))
  })
)