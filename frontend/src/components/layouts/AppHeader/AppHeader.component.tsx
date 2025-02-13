import type { FC } from "react";
import { Box } from "@mui/material";

import logoUrl from "@/assets/logo.svg"

import { StyledAppHeader, StyledImgWrapper } from "./AppHeader.styles";

export const AppHeader: FC = () => (
  <StyledAppHeader>
    <StyledImgWrapper>
      <img src={logoUrl} alt="budgetWise-logo" />
    </StyledImgWrapper>

    <Box
      display="flex"
      alignItems="center"
      ml="auto"
    >
      register
    </Box>
  </StyledAppHeader>
)
