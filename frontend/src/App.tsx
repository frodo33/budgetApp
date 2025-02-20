import type { FC, ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { I18nextProvider } from "react-i18next";

import { theme } from "@/theme/theme";

import i18n from "./core/i18n/i18n";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <CssBaseline />
      {children}
    </I18nextProvider>
  </ThemeProvider>
)