import type { FC, ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { theme } from "@/theme/theme";

import i18n from "./core/i18n/i18n";
import { store } from "./store/store";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <CssBaseline />
        {children}
      </Provider>
    </I18nextProvider>
  </ThemeProvider>
)