/** @jsxImportSource theme-ui */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text } from "@digidexfinance/uikit";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";

import { getFullDisplayBalance } from "utils/formatBalance";
import useApproveTransaction from "hooks/useApproveTransaction";
import { useDigichain, useTreasury } from "hooks/useContract";
import { useBuyGoldenDigichain } from "hooks/useGoldenDigichain";
import { useToast } from "state/hooks";
import { useDigichainAddress } from "hooks/useAddress";
import useTokenBalance from "hooks/useTokenBalance";

import { useTranslation } from "contexts/Localization";
import TokenInput from "components/TokenInput";
import {
  FlexSection,
  CheckBoxCon,
  StyledCheckbox,
  CBS,
  HeaderCard,
  Header,
  TokensDisplay,
  ContentCard,
  StyledButton,
  StyledText,
  StyledCard,
} from "./styles";
import UnlockButton from "components/UnlockButton";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { Flex } from "theme-ui";
import { useUserUnlimitedGdigi } from "state/user/hooks";

interface ConvertCardType {
  fromToken: string;
  toToken: string;
}

const ConvertCard: React.FC<ConvertCardType> = ({ fromToken, toToken }) => {
  const MAX_BUY = 5000;
  const [val, setVal] = useState("");
  const [unlimitedGdigi, setUnlimitedGdigiMinting] = useUserUnlimitedGdigi();
  const [unlimited, setUnlimited] = useState<boolean>(unlimitedGdigi);
  const gdigiVal = parseFloat(val) * 0.7;
  const [processing, setProcessing] = useState(false);
  const treasuryContract = useTreasury();
  const { handleBuy } = useBuyGoldenDigichain();
  const digichainBalance = useTokenBalance(useDigichainAddress());
  const { toastSuccess } = useToast();
  const digichainContract = useDigichain();
  const { t } = useTranslation();
  const [triedMore, setTriedMore] = useState(false);
  const { account } = useActiveWeb3React();

  const { isApproving, isApproved, handleApprove } = useApproveTransaction({
    onRequiresApproval: async (loadedAccount) => {
      try {
        const response = await digichainContract.allowance(
          loadedAccount,
          treasuryContract.address
        );
        const currentAllowance = new BigNumber(response.toString());
        return currentAllowance.gt(0);
      } catch (error) {
        return false;
      }
    },
    onApprove: () => {
      return digichainContract
        .approve(treasuryContract.address, ethers.constants.MaxUint256)
        .then((trx) => trx.wait());
    },
    onSuccess: async () => {
      toastSuccess(t("Approved!"));
    },
  });

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(digichainBalance);
  }, [digichainBalance]);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (!unlimited && parseInt(e.currentTarget.value) > MAX_BUY) {
        setTriedMore(true);
        return;
      }
      setVal(e.currentTarget.value);
    },
    [setVal, unlimited]
  );

  useEffect(() => {
    setTimeout(() => {
      setTriedMore(false);
    }, 600);
  }, [triedMore]);

  const buy = useCallback(async () => {
    try {
      setProcessing(true);
      await handleBuy(val);
      setProcessing(false);
    } catch (e) {
      setProcessing(false);
      console.warn(e);
    }
  }, [handleBuy, val]);

  const disabled =
    processing || parseInt(val) === 0 || parseInt(val) > parseInt(fullBalance);

  const displayMax = unlimited ? "unlimited" : MAX_BUY;

  const handleSelectMax = useCallback(() => {
    const max =
      parseInt(fullBalance) < MAX_BUY || unlimited ? fullBalance : MAX_BUY;
    setVal(max.toString());
  }, [fullBalance, unlimited, setVal]);

  const handleCheckBox = useCallback(() => {
    setUnlimited(!unlimited);
    if (!unlimited) setUnlimitedGdigiMinting(true);
    if (unlimited) {
      setUnlimitedGdigiMinting(false);
      setVal("");
    }
  }, [setUnlimitedGdigiMinting, unlimited]);

  return (
    <StyledCard>
      <HeaderCard>
        <Header>{t("CONVERT")}</Header>
        <TokensDisplay>
          {fromToken} &gt; {toToken}
        </TokensDisplay>
      </HeaderCard>

      <ContentCard>
        <TokenInput
          value={val}
          onSelectMax={handleSelectMax}
          onChange={handleChange}
          max={parseFloat(fullBalance).toFixed(2)}
          symbol={fromToken}
        />
        {!account ? (
          <Flex sx={{ margin: "15px 0 10px 0" }}>
            <UnlockButton table />
          </Flex>
        ) : isApproved ? (
          <StyledButton
            disabled={disabled}
            variant="primary"
            margin="10px"
            onClick={buy}
          >
            {t("CONVERT")}
          </StyledButton>
        ) : (
          <StyledButton
            margin="10px"
            disabled={isApproving}
            onClick={handleApprove}
          >
            {t("APPROVE CONTRACT")}
          </StyledButton>
        )}

        <FlexSection flexDirection="column" alignItems="center" mb="10px">
          <Text fontSize="16px" fontWeight={700}>
            {t("OUTPUT")} {`${toToken} ${gdigiVal ? gdigiVal.toFixed(3) : 0}`}
          </Text>
          <Text
            fontSize="12px"
            fontWeight={500}
            style={{ color: triedMore ? "#ff0000" : null }}
          >
            {t("*Current max conversion is %displayMax%", { displayMax })}
          </Text>
          <CBS>
            <CheckBoxCon>
              <StyledCheckbox
                id="checkbox"
                scale="md"
                checked={unlimited}
                onChange={handleCheckBox}
              />
            </CheckBoxCon>
            <StyledText fontSize="12px" fontWeight={500}>
              {t(
                "I understand how GDIGI works and I want to enable unlimited buy."
              )}
            </StyledText>
          </CBS>
        </FlexSection>
      </ContentCard>
    </StyledCard>
  );
};

export default React.memo(ConvertCard);
