import { alpha } from "@mui/material";

import type { ComponentOverride } from "@/theme/theme.types";

export const MuiButton: ComponentOverride["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    variant: "contained",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.sm,
      border: "none",
      ...theme.typography.button,
      "& *": {
        pointerEvents: "none",
      },
      "&:hover, &:disabled": {
        border: "none",
        boxShadow: "none",
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        minWidth: "100px",
        padding: theme.spacing(0.75, 1.5),
        ...theme.typography.body1,
        fontWeight: 600,
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        minWidth: "120px",
        padding: theme.spacing(1, 2),
      }),
    },
    {
      props: { variant: "contained" },
      style: ({ theme }) => ({
        "&:disabled": {
          background: theme.palette.grey.light,
        },
      }),
    },
    {
      props: { variant: "contained", color: "error" },
      style: ({ theme }) => ({
        color: theme.palette.common.white,
        "&:disabled": {
          background: theme.palette.error.light,
        },
      }),
    },
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
        "&:hover": {
          background: alpha(theme.palette.primary.light, 0.16),
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
        },
        "&:focus": {
          boxShadow: `inset 0px 0px 0px 2px ${theme.palette.primary.light}`
        },
        "&:disabled": {
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey.main}`,
        },
      }),
    },
    {
      props: { variant: "text" },
      style: ({ theme }) => ({
        display: "inline-block",
        minWidth: "unset",
        padding: 0,
        color: theme.palette.primary.main,
        "&:hover, &:focus": {
          background: "transparent",
          color: theme.palette.primary.dark,
        },
        "&:focus": {
          boxShadow: "none",
          color: theme.palette.primary.dark,
        },
        "&:disabled": {
          color: theme.palette.grey.main,
        },
      }),
    },
  ],
}