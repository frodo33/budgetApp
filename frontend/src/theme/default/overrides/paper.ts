import type { ComponentOverride } from "@/theme/theme.types";

export const MuiPaper: ComponentOverride["MuiPaper"] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.boxShadows.lg,
      borderRadius: theme.shape.lg,
      padding: theme.spacing(2, 3)
    }),
  },
}