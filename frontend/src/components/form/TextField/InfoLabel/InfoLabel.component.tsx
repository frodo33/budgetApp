import type { FC } from "react"

import { StyledInfoLabel } from "./InfoLabel.styles"
import type { InfoLabelProps } from "./InfoLabel.types";

export const InfoLabel: FC<InfoLabelProps> = ({ children, invalid, ...props }) => (
  <StyledInfoLabel
    variant="body2"
    component="span"
    invalid={!!invalid}
    {...props}
  >
    {children}
  </StyledInfoLabel>
)
