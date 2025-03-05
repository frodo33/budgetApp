import type { TFunction } from "i18next"
import * as yup from "yup"

import type { ResetPasswordFormState } from "./ResetPasswordForm.types"
import { PASSWORD_MIN_LENGTH } from "../../Register/RegisterForm/RegisterForm.schema"

export const ResetPasswordFormSchema = (t: TFunction): yup.ObjectSchema<ResetPasswordFormState> => (
  yup.object().shape({
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