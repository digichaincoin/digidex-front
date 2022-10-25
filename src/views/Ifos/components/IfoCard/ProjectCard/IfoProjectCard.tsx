import React from "react";
import { Heading, Text } from "@digidexfinance/uikit";
import { ifosConfig } from "config/constants";
import DigiZone from "config/constants/digizone";
import { useTranslation } from "contexts/Localization";
import IfoCardDescription from "../CardDescription/IfoCardDescription";
import LinearVestingCard from "../LinearVesting";
import FourPhaseVestingCard from "../FourPhaseVesting";

import { StyledIfoCard, Banner, Content, CardListBox } from "./styles";

interface IfoCardProps {
  ifoId: string;
}

const IfoProjectCard: React.FC<IfoCardProps> = ({ ifoId }) => {
  const { t } = useTranslation();
  const ifo = React.useMemo(
    () => ifosConfig(t).find((each) => each.id === ifoId),
    [ifoId, t]
  );
  const gdigiIfo = React.useMemo(
    () => DigiZone(t).ifos.find((each) => each.id === ifoId),
    [ifoId, t]
  ); // TODO: Double check if this is correct GDIGI project info

  if (!ifo) {
    console.warn(`For project:${ifoId}, ifo configuration is not found`, ifo);
    return null;
  }

  const { id, subTitle, description, launchDate, launchTime, projectSiteUrl } =
    ifo;

  return (
    <StyledIfoCard ifoId={id}>
      <Banner src={`/images/ifos/${ifoId}-bg.svg`} alt={ifoId} />
      <Content>
        <Heading as="h3">{subTitle}</Heading>

        {/* // TODO: Cannot use block number for the countdown link, as this is the card for the project, not specific to each offering (IAOLinearVesting contract), so `startBlock` is not available */}
        <Text fontSize="14px" color="yellow" fontWeight={600}>
          {t("On")} {launchDate}, {launchTime}
        </Text>

        <CardListBox>
          {ifo.isLinear ? (
            <LinearVestingCard ifo={ifo} />
          ) : (
            <FourPhaseVestingCard ifo={ifo} />
          )}

          {gdigiIfo?.isLinear && <LinearVestingCard ifo={gdigiIfo} gdigi />}

          {!!gdigiIfo && !gdigiIfo.isLinear && (
            <FourPhaseVestingCard gdigi ifo={gdigiIfo} />
          )}
        </CardListBox>

        <IfoCardDescription
          description={description}
          projectSiteUrl={projectSiteUrl}
          defaultIsOpen
        />
      </Content>
    </StyledIfoCard>
  );
};

export default React.memo(IfoProjectCard);
