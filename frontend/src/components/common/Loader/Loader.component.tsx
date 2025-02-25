import type { FC } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { StyledDeterminateVariant, StyledIndeterminateVariant, StyledTypography, StyledWrapper } from "./Loader.styles";
import type { LoaderProps } from "./Loader.types";
import { getLoaderSize } from "./Loader.utils";

export const Loader: FC<LoaderProps> = ({
  size = "medium",
  withText = false,
  fullPage = false,
  ...props
}) => {
  const { t } = useTranslation()
  const loaderSize = getLoaderSize(size);

  return (
    <StyledWrapper fullPage={fullPage} {...props}>
      <Box position='relative'>
        <StyledDeterminateVariant
          variant='determinate'
          value={100}
          thickness={6}
          size={loaderSize}
        />

        <StyledIndeterminateVariant
          thickness={6}
          size={loaderSize}
        />
      </Box>

      {withText ? (
        <StyledTypography variant='body1' mt={2}>
          {t("common:loading")}
        </StyledTypography>
      ) : null}
    </StyledWrapper>
  );
};