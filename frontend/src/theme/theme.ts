import { createTheme } from "@mui/material";

import { breakpoints } from "./default/breakpoints"
import { darkPalette } from "./default/palette/darkPalette";
import { lightPalette } from "./default/palette/lightPalette";
import { shadows } from "./default/shadows";
import { shape } from "./default/shape";
import { typography } from "./default/typography"

export const theme = createTheme({
  defaultColorScheme: "light",
  colorSchemes: {
    light: lightPalette,
    dark: darkPalette
  },
  breakpoints,
  typography,
  shape,
  boxShadows: shadows,
})
