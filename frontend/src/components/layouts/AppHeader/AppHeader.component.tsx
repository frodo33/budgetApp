import type { FC } from "react";

import logoUrl from "@/assets/logo.svg"

import { StyledAppHeader, StyledImgWrapper } from "./AppHeader.styles";

export const AppHeader: FC = () => (
  <StyledAppHeader>
    <StyledImgWrapper>
      <img src={logoUrl} alt="budgetWise-logo" />
    </StyledImgWrapper>
  </StyledAppHeader>
)
