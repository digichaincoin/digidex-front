import React from "react";
import {
  DigiSwapRoundIcon,
  Flex,
  Text,
  useMatchBreakpoints,
} from "@digidexfinance/uikit";
import { useTranslation } from "contexts/Localization";
import {
  BuyDigichain,
  ContentContainer,
  HeadingText,
  LearnMore,
} from "./styles";

const WelcomeContent: React.FC = () => {
  const { isSm, isXs } = useMatchBreakpoints();
  const { t } = useTranslation();
  const isMobile = isSm || isXs;

  return (
    <Flex justifyContent="center" alignItems="center" style={{ width: "100%" }}>
      <ContentContainer>
        <Flex flexDirection="column" style={{ maxWidth: "740px" }}>
          <HeadingText>
            {t("Welcome to SmartDex Digichain Ecosystem")}
            <p>------</p>
          </HeadingText>
          {!isMobile && (
            <>
              <br />
              <br />
              <Text>
                {t(
                  "DigiDex | Connected DeFi, to make it easier for you to decentralize transactions."
                )}
              </Text>
            </>
          )}
          <br />
          <br />
          <Flex>
            {isMobile ? (
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                <a
                  href="/swap"
                  rel="noopener noreferrer"
                  style={{ width: "90%" }}
                >
                  <BuyDigichain fullWidth>
                    {t("Buy Digichain")}
                    {/* <DigiSwapRoundIcon ml="10px" width="27px" height="27px" /> */}
                  </BuyDigichain>
                </a>
                <a
                  href="https://digichain.gitbook.io/digidex-finance/welcome/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "90%" }}
                >
                  <LearnMore>{t("Learn More")}</LearnMore>
                </a>
              </Flex>
            ) : (
              <Flex justifyContent="space-between" style={{ width: "auto" }}>
                <a href="/swap" rel="noopener noreferrer">
                  <BuyDigichain>
                    {t("Buy Digichain")}
                    {/* <DigiSwapRoundIcon ml="10px" width="27px" height="27px" /> */}
                  </BuyDigichain>
                </a>
                <a
                  href="https://digichaincoin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LearnMore>{t("White paper")}</LearnMore>
                </a>
              </Flex>
            )}
          </Flex>
        </Flex>

        {/*
         Will be added later
         {!isMobile && (
          <Flex alignItems="center" justifyContent="center" paddingBottom="100px">
            <Spinner size={400} />
          </Flex>
        )} */}
      </ContentContainer>
    </Flex>
  );
};

export default React.memo(WelcomeContent);
