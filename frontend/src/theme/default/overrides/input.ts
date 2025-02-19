import type { ComponentOverride } from "@/theme/theme.types"

export const MuiInputBase: ComponentOverride["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      fieldset: {
        borderRadius: theme.shape.sm,
        border: `1px solid ${theme.palette.grey.light}`,
        "& legend": {
          maxWidth: "0.01px"
        },
      },
      "&:not(.Mui-disabled):hover > fieldset": {
        border: `1px solid ${theme.palette.primary.light}!important`,
      },
      "&.Mui-focused > fieldset": {
        border: `1px solid ${theme.palette.primary.main}!important`,
      },
      "&.Mui-error > fieldset": {
        border: `1px solid ${theme.palette.error.main}!important`,
      },
    }),
  }
}

export const MuiInputLabel: ComponentOverride["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: "static",
      transform: "unset",
      marginBottom: theme.spacing(0),
      color: theme.palette.text.secondary,
      ...theme.typography.body3,
      "&.Mui-error, &.Mui-focused": {
        color: theme.palette.text.secondary,
      }
    }),
  },
}

export const MuiFormHelperText: ComponentOverride["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({
      margin: 0,
    }),
  },
}

export const MuiOutlinedInput: ComponentOverride["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1.5),
    }),
  }
}