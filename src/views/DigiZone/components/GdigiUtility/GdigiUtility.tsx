/** @jsxImportSource theme-ui */
import React from "react";
import "swiper/swiper.min.css";
import { useTranslation } from "contexts/Localization";
import {
  UtilityCon,
  UtilityHeading,
  UtilityTitle,
  UtilityWrapper,
} from "./styles";
import { Flex } from "@digidexfinance/uikit";
import useIsMobile from "hooks/useIsMobile";
import MobileCard from "./MobileCard";
import { utilitySlides } from "./UtilitySlides";

export const GdigiUtility: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <UtilityCon>
      <UtilityTitle>
        <UtilityHeading as="h2">{t("GDIGI UTILITY")}</UtilityHeading>
      </UtilityTitle>
      <UtilityWrapper>
        {isMobile ? (
          <MobileCard />
        ) : (
          <Flex
            justifyContent="center"
            alignContent="center"
            style={{ width: "100%", marginTop: "10px" }}
          >
            {utilitySlides.map((slide) => {
              return <>{slide}</>;
            })}
          </Flex>
        )}
      </UtilityWrapper>
    </UtilityCon>
  );
};

export default GdigiUtility;
