import type { FC } from "react";
import { Box, Button, Divider, Typography, useColorScheme, useMediaQuery, useTheme } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import { TextFieldController } from "@/components/form/TextFieldController/TextFieldController.component";

export const RegisterForm: FC = () => {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "all",
    // resolver: useYupResolver(LoginFormValidationSchema),
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    console.log(values, "values")
    try { } catch (error) { }
  })

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Box mb={2}>
          <TextFieldController
            name="username"
            label="Username"
            placeholder="Username"
            type="email"
            sx={{ fontSize: "16px" }}
          />
        </Box>

        <Box mb={2}>
          <TextFieldController
            name="email"
            label="Email"
            placeholder="Email"
          />
        </Box>

        <Box mb={2}>
          <TextFieldController
            name="password"
            label="Password"
            placeholder="Password"
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
        >
          Register
        </Button>

        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Already have an account?
          </Typography>&nbsp;
          <Button variant="text">
            Log in
          </Button>
        </Box>
      </Box>
    </FormProvider>
  )
}
