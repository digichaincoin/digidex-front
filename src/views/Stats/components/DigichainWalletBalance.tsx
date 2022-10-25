import React from "react";
import { Text } from "@digidexfinance/uikit";
import { useWeb3React } from "@web3-react/core";
import useTokenBalance from "hooks/useTokenBalance";
import { useTranslation } from "contexts/Localization";
import { getBalanceNumber } from "utils/formatBalance";
import { useDigichainAddress } from "hooks/useAddress";
import CardValue from "./CardValue";

const DigichainWalletBalance = () => {
  const { t } = useTranslation();
  const digichainBalance = useTokenBalance(useDigichainAddress());
  const { account } = useWeb3React();

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: "36px" }}>
        {t("Locked")}
      </Text>
    );
  }

  return (
    <CardValue value={getBalanceNumber(digichainBalance)} fontSize="24px" />
  );
};

export default DigichainWalletBalance;
