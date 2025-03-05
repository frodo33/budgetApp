import type { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { ButtonLoader } from "@/components/common/ButtonLoader/ButtonLoader.component";
import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";
import { getPath } from "@/pages/@Router/router/router.utils";
import { RoutePath } from "@/pages/@Router/routes";

import { useForgotPasswordForm } from "./ForgotPasswordForm.hook";

export const ForgotPasswordForm: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { form, handleSubmit, isLoading, emailSent } = useForgotPasswordForm()

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Box mb={3}>
          <TextFieldController
            name="email"
            placeholder={t("form:placeholder:email")}
            disabled={isLoading || emailSent}
          />
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            fullWidth
            disabled={isLoading}
            onClick={() => navigate(getPath(RoutePath.LOGIN, true))}
          >
            {t("common:back")}
          </Button>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            endIcon={(isLoading && !emailSent) ? <ButtonLoader /> : null}
            disabled={isLoading || emailSent}
          >
            {t("common:send")}
          </Button>
        </Box>

        {emailSent ? (
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
          >
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t("user:linkNotReceived")}
            </Typography>&nbsp;

            <Button
              type="submit"
              variant="text"
              endIcon={(isLoading && emailSent) ? <ButtonLoader /> : null}
              disabled={isLoading}
            >
              {t("user:resend")}
            </Button>
          </Box>
        ) : null}
      </Box>
    </FormProvider>
  )
}
