import type { TFunction } from "i18next"
import * as yup from "yup"

import type { RegisterFormState } from "./RegisterForm.types"

const USERNAME_MIN_LENGTH = 3
const USERNAME_MAX_LENGTH = 20
const PASSWORD_MIN_LENGTH = 8

export const RegisterFormSchema = (t: TFunction): yup.ObjectSchema<RegisterFormState> => (
  yup.object().shape({
    username: yup
      .string()
      .min(USERNAME_MIN_LENGTH, t("errors:validation:minChars", { count: USERNAME_MIN_LENGTH }))
      .max(USERNAME_MAX_LENGTH, t("errors:validation:maxChars", { count: USERNAME_MAX_LENGTH }))
      .required(t("errors:validation:requiredField")),
    email: yup
      .string()
      .email(t("errors:validation:email"))
      .required(t("errors:validation:requiredField")),
    password: yup
      .string()
      .required(t("errors:validation.requiredField"))
      .min(PASSWORD_MIN_LENGTH, t("errors:validation:passwordLength", { count: PASSWORD_MIN_LENGTH })),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("errors:validation:passwordNotMatch"))
      .required(t("errors:validation:requiredField"))
  })
)