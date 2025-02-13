import { Box } from "@mui/material";
import { Outlet } from "react-router";

import { StyledContainer, StyledContentLayer } from "./PublicLayout.styles";
import { AppHeader } from "../AppHeader/AppHeader.component";

export const PublicLayout = () => (
  <Box display="flex">
    <StyledContentLayer>
      <StyledContainer
        maxWidth="xl"
        disableGutters
      >
        <AppHeader />
        <Outlet />
      </StyledContainer>
    </StyledContentLayer>
  </Box>
)