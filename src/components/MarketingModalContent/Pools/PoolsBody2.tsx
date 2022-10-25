import React from "react";
import ModalContent from "../MarketingModalContent";
import {
  StyledText,
  MiniHeaderText,
  MainHeaderText,
  MiniButton,
  RightContent,
  StyledPoolsM2Icon,
} from "../styles";

const PoolsBody2: React.FC = () => {
  const openExchange = () => {
    return window.open("https://digidex.finance/swap", "_blank");
  };

  const openGdigi = () => {
    return window.open("https://digidex.finance/gdigi", "_blank");
  };

  return (
    <ModalContent Icon={<StyledPoolsM2Icon />}>
      <RightContent>
        <MiniHeaderText>Step 2</MiniHeaderText>
        <MainHeaderText>Get DIGICHAIN</MainHeaderText>
        <StyledText>
          If you don&apos;t own DIGICHAIN already, go to our{" "}
          <MiniButton onClick={openExchange}>Exchange</MiniButton> to acquire
          some! (or <MiniButton onClick={openGdigi}>GDIGI</MiniButton>)
        </StyledText>
      </RightContent>
    </ModalContent>
  );
};

export default PoolsBody2;
