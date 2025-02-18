/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: CSSProperties;
  }

  interface Color {
    light?: string;
    main?: string;
    dark?: string;
  }

  interface ThemeOptions {
    boxShadows: {
      sm: string;
      md: string;
      lg: string;
    };
    shape: {
      sm: string;
      md: string;
      lg: string;
    };
  }

  interface Theme {
    boxShadows: {
      sm: string;
      md: string;
      lg: string;
    };
    shape: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: false;
    h5: false;
    h6: false;
    body1: true;
    body2: true;
    body3: true;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
    button: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
    error: true;
    secondary: false;
    text: false;
    inherit: false;
    warning: false;
    info: false;
    success: false;
  }

  interface ButtonPropsSizeOverrides {
    small: true;
    medium: true;
    large: false;
  }
}