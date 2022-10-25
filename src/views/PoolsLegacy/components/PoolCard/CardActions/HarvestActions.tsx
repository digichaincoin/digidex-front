import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "@digidexfinance/uikit";
import BigNumber from "bignumber.js";
import useReward from "hooks/useReward";
import { useSousHarvest } from "hooks/useHarvest";
import { useSousStake } from "hooks/useStake";
import { useSousEmergencyWithdraw } from "hooks/useUnstake";
import { useTranslation } from "contexts/Localization";
import { getBalanceNumber } from "utils/formatBalance";

const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 14px;
  padding: 0px 10px;
`;

interface HarvestActionsProps {
  earnings: BigNumber;
  sousId: number;
  earningTokenPrice?: number;
  isBnbPool?: boolean;
  isLoading?: boolean;
  compound?: boolean;
  emergencyWithdraw?: boolean;
  tokenDecimals: number;
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  tokenDecimals,
  sousId,
  compound,
  emergencyWithdraw,
}) => {
  const { t } = useTranslation();
  const earningTokenBalance = getBalanceNumber(earnings, tokenDecimals);
  const rewardRef = useRef(null);
  const rewardRefDigiHarder = useRef(null);
  const [pendingTx, setPendingTx] = useState(false);
  const { onHarvest } = useSousHarvest(sousId);
  const onDigiHarder = useReward(
    rewardRefDigiHarder,
    useSousStake(sousId).onStake
  );
  const onEmergencyWithdraw = useReward(
    rewardRef,
    useSousEmergencyWithdraw(sousId).onEmergencyWithdraw
  );

  const renderButton = () => {
    if (emergencyWithdraw) {
      return (
        <StyledButton
          className="noClick"
          disabled={earningTokenBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true);
            await onEmergencyWithdraw().catch(() => {
              rewardRefDigiHarder.current?.rewardMe();
            });
            setPendingTx(false);
          }}
        >
          {t("WITHDRAW")}
        </StyledButton>
      );
    }
    if (compound) {
      return (
        <StyledButton
          className="noClick"
          disabled={earningTokenBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true);
            await onDigiHarder(earningTokenBalance).catch(() => {
              rewardRefDigiHarder.current?.rewardMe();
            });
            setPendingTx(false);
          }}
        >
          {t("DIGI HARDER")}
        </StyledButton>
      );
    }
    return (
      <StyledButton
        className="noClick"
        disabled={earningTokenBalance === 0 || pendingTx}
        onClick={async () => {
          setPendingTx(true);
          await onHarvest().catch(() => {
            rewardRef.current?.rewardMe();
          });
          setPendingTx(false);
        }}
      >
        {t("HARVEST")}
      </StyledButton>
    );
  };

  return renderButton();
};

export default HarvestActions;
