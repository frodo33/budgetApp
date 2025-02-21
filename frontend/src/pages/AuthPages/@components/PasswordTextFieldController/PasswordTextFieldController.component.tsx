import type { FC } from "react";
import { useState } from "react"
import { PiEye, PiEyeSlash } from "react-icons/pi";

import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";
import type { TextFieldControllerProps } from "@/components/form/TextFieldController/TextFieldController.types";

import { StyledEyeButton } from "./PasswordTextFieldController.styles";

export const PasswordTextFieldController: FC<TextFieldControllerProps & { eye?: boolean }> = ({ eye = true, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const type = showPassword ? "text" : "password"
  const icon = showPassword
    ? <PiEye size={20} onClick={() => setShowPassword(true)} />
    : <PiEyeSlash size={20} onClick={() => setShowPassword(false)} />

  return (
    <TextFieldController
      type={type}
      endAdornment={eye ? (
        <StyledEyeButton
          variant="text"
          onClick={() => setShowPassword(!showPassword)}
        >
          {icon}
        </StyledEyeButton>
      ) : null}
      {...props}
    />
  )
}