import React from "react";
import { useTranslation } from "contexts/Localization";

import {
  InfoSect1,
  InfoCon,
  InfoText,
  Container,
  Main,
  FirstHeader,
  FirstHeaderCon,
  Sect,
  Sect1,
  Sect1a,
  Sect1b,
  Sect1c,
  Sect1d,
  Sect2a,
  Sect2b,
  Sect2c,
  Sect2d,
  Text1,
  Text2,
  Text3,
  Text4,
  Main2,
  Footer,
  LearnMoreBtn,
} from "./styles";

interface InfoProps {
  content: string;
}

const Info: React.FC<InfoProps> = ({ content }) => {
  return (
    <InfoCon>
      <InfoText>{content}</InfoText>
    </InfoCon>
  );
};

export const GdigiDisclaimers: React.FC = () => {
  const { t } = useTranslation();

  const learnMore = () => {
    return window.open(
      "https://digichain.gitbook.io/digidex-finance/product-and-features/tokenomics/gdigi",
      "_blank"
    );
  };
  return (
    <Container>
      <Main>
        <FirstHeaderCon>
          <FirstHeader as="h2">{t("GDIGI BREAKDOWN")}</FirstHeader>
        </FirstHeaderCon>

        <Sect>
          <Sect1>
            <Sect1a>
              <Text1>{t("Fee1")}</Text1>
            </Sect1a>
            <Sect1b>
              <Text2>{t("Converting")}</Text2>
            </Sect1b>
            <Sect1c>
              <Text4>{t("Staking / Committing")}</Text4>
            </Sect1c>
            <Sect1d>
              <Text4>{t("Returning")}</Text4>
            </Sect1d>
          </Sect1>

          <Sect1>
            <Sect2a>
              <Text2>{t("Fee")}</Text2>
            </Sect2a>
            <Sect2b>
              <Text3>
                {`28% ${t("Burn Fee")}`}
                <br />
                {`2% ${t("Reflect Fee")}`}
              </Text3>
            </Sect2b>
            <Sect2c>
              <Text3>{`2% ${t("Reflect Fee")} (${t(
                "Both in and out"
              )})`}</Text3>
            </Sect2c>
            <Sect2d>
              <Text3>{`2% ${t("Reflect Fee")}`}</Text3>
            </Sect2d>
          </Sect1>

          <Sect1>
            <Sect2a>
              <Text2>{t("Value")}</Text2>
            </Sect2a>
            <Sect2b>
              <Text3>{t("0.7 GDIGI per DIGICHAIN")}</Text3>
            </Sect2b>
            <Sect2c>
              <Text3>{t("1 GDIGI valued at 1.389 DIGICHAIN")}</Text3>
            </Sect2c>
            <Sect2d>
              <Text3>{t("0.98 DIGICHAIN per GDIGI")}</Text3>
            </Sect2d>
          </Sect1>
        </Sect>
      </Main>

      <Main2>
        <FirstHeaderCon>
          <FirstHeader as="h2">{t("KEY DISCLAIMERS")}</FirstHeader>
        </FirstHeaderCon>

        <InfoSect1>
          <Info
            content={t(
              "The 2% reflect fee applies to all GDIGI transactions, including transfers, staking in pools, unstaking from pools, and IAO participation"
            )}
          />
          <Info
            content={t(
              "You do not accumulate reflect fees when your GDIGI is staked in a pool"
            )}
          />
        </InfoSect1>
      </Main2>

      <Footer>
        <LearnMoreBtn onClick={learnMore} size="md" mb="20px">
          {t("LEARN MORE")}
        </LearnMoreBtn>
      </Footer>
    </Container>
  );
};

export default GdigiDisclaimers;
