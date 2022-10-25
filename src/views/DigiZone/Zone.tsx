import React, { useState } from "react";
import { useTranslation } from "contexts/Localization";
import Page from "components/layout/Page";
import Spacer from "components/Spacer";
import Banner from "components/Banner";
import GdigiUtility from "./components/GdigiUtility/GdigiUtility";
import GdigiDisclaimers from "./components/GdigiDisclaimers/GdigiDisclaimers";
import ConvertCard from "./components/ConvertCard";
import ReturnCard from "./components/ReturnCard";
import {
  PaddedCard,
  TopCon,
  CenterCard,
  OuterContent,
  OuterContentText,
  InnerContent,
  InnerContentText,
  Cards,
  ReadMore,
  WarningHeader,
} from "./styles";
import SwiperProvider from "../../contexts/SwiperProvider";

const Zone = () => {
  const [readingMore, setReadingMore] = useState(false);
  const { t } = useTranslation();

  const toggleReadMore = () => {
    setReadingMore(!readingMore);
  };

  return (
    <>
      <Page width="1130px">
        <Banner
          banner="gdigi"
          link="https://digichain.gitbook.io/digidex-finance/welcome/apeswap-tokens/gdigi"
          title={t("Golden Digichain")}
          margin="0px 0px 20px 0px"
          maxWidth={1130}
        />
        <PaddedCard>
          <TopCon>
            <CenterCard>
              <WarningHeader as="h1">{t("HEADS UP, APES!")}</WarningHeader>
              {!readingMore && (
                <ReadMore onClick={toggleReadMore}>{t("Read More")}</ReadMore>
              )}

              <InnerContent readingMore={readingMore}>
                <InnerContentText>
                  {t(
                    "Converting from DIGICHAIN to GDIGI involves paying a 28% burn fee and a 2% reflect fee for a total cost of 30% per conversion. For every 1 DIGICHAIN you convert, you will receive 0.7 GDIGI."
                  )}
                </InnerContentText>
              </InnerContent>
            </CenterCard>
          </TopCon>

          <OuterContent readingMore={readingMore}>
            <OuterContentText>
              {t(
                "Buying GDIGI involves paying a 28% burn fee and a 2% reflect fee for a total cost of 30%. This means that for every 1 DIGICHAIN you trade in, you will receive 0.7 GDIGI"
              )}
            </OuterContentText>
          </OuterContent>
        </PaddedCard>

        <Cards id="convert">
          <ConvertCard fromToken="DIGICHAIN" toToken="GDIGI" />
          <ReturnCard fromToken="GDIGI" toToken="DIGICHAIN" />
        </Cards>

        <SwiperProvider>
          <GdigiUtility />
        </SwiperProvider>
        <GdigiDisclaimers />

        <Spacer size="lg" />
        <Spacer size="md" />
      </Page>
    </>
  );
};
export default React.memo(Zone);
