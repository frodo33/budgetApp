import type { BoxProps } from "@mui/material";

export type LoaderSizeOption = "large" | "medium" | "small"

export type LoaderProps = BoxProps & {
  size?: LoaderSizeOption;
  withText?: boolean;
  fullPage?: boolean;
};