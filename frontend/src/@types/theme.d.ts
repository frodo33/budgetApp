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
      sm: number;
      md: number;
      lg: number;
    };
  }

  interface Theme {
    boxShadows: {
      sm: string;
      md: string;
      lg: string;
    };
    shape: {
      sm: number;
      md: number;
      lg: number;
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
    secondary: true;
    text: false;
    inherit: false;
    error: false;
    warning: false;
    info: false;
    success: false;
  }
}