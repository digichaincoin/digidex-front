/** @jsxImportSource theme-ui */
import React, { useCallback, useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import {
  Flex,
  Heading,
  Button,
  Text,
  ChevronRightIcon,
  Svg,
  Checkbox,
} from "@digi.swap/uikit";
import { useTranslation } from "contexts/Localization";
import { useCurrency } from "hooks/Tokens";
import { Field } from "state/swap/actions";
import useTheme from "hooks/useTheme";
import {
  useDigichainAddress,
  useGoldenDigichainAddress,
} from "hooks/useAddress";
import { useDigichain, useTreasury } from "hooks/useContract";
import { useBuyGoldenDigichain } from "hooks/useGoldenDigichain";
import { useToast } from "state/hooks";
import { useCurrencyBalance } from "state/wallet/hooks";
import useApproveTransaction from "hooks/useApproveTransaction";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import UnlockButton from "components/UnlockButton";
import Dots from "components/Loader/Dots";
import DexPanel from "views/Dex/components/DexPanel";
import { gdigiStyles } from "./styles";
import { useUserUnlimitedGdigi } from "state/user/hooks";

const Gdigi = () => {
  const { account } = useActiveWeb3React();
  const { isDark } = useTheme();
  const MAX_BUY = 5000;
  const digichainToken = useCurrency(useDigichainAddress());
  const gdigiToken = useCurrency(useGoldenDigichainAddress());
  const { t } = useTranslation();
  const [unlimitedGdigi, setUnlimitedGdigiMinting] = useUserUnlimitedGdigi();
  const [unlimited, setUnlimited] = useState(unlimitedGdigi);
  const treasuryContract = useTreasury();
  const [processing, setProcessing] = useState(false);
  const [triedMore, setTriedMore] = useState(false);

  const [val, setVal] = useState("0");
  const { handleBuy } = useBuyGoldenDigichain();
  const gdigiVal = parseFloat(val) > 0 ? parseFloat(val) * 0.7 : 0;
  const { toastSuccess } = useToast();
  const digichainContract = useDigichain();
  const accountDigichainBalance = useCurrencyBalance(account, digichainToken);
  const displayMax = unlimited ? "unlimited" : MAX_BUY;
  const fullDigichainBalance = accountDigichainBalance?.toExact();

  const handleSelectMax = useCallback(() => {
    const max =
      parseInt(fullDigichainBalance) < MAX_BUY || unlimited
        ? fullDigichainBalance
        : MAX_BUY;
    setVal(max.toString());
  }, [fullDigichainBalance, unlimited, setVal]);

  const handleChange = useCallback(
    (_, val) => {
      if (!unlimited && parseInt(val) > MAX_BUY) {
        setTriedMore(true);
        return;
      }
      setVal(val);
    },
    [unlimited]
  );

  useEffect(() => {
    setTimeout(() => {
      setTriedMore(false);
    }, 600);
  }, [triedMore]);

  const {
    isApproving: isApprovingDigichain,
    isApproved: isApprovedDigichain,
    handleApprove: handleApproveDigichain,
  } = useApproveTransaction({
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
    onApprove: async () => {
      const trx = await digichainContract.approve(
        treasuryContract.address,
        ethers.constants.MaxUint256
      );
      return await trx.wait();
    },
    onSuccess: async () => toastSuccess(t("Approved!")),
  });

  const buyGdigi = useCallback(async () => {
    try {
      setProcessing(true);
      await handleBuy(val);
      setProcessing(false);
      setVal("0");
    } catch (e) {
      setProcessing(false);
      console.warn(e);
    }
  }, [handleBuy, val]);

  const handleCheckBox = useCallback(() => {
    setUnlimited(!unlimited);
    if (!unlimited) setUnlimitedGdigiMinting(true);
    if (unlimited) {
      setUnlimitedGdigiMinting(false);
      setVal("0");
    }
  }, [unlimited, setUnlimitedGdigiMinting]);

  const disabled =
    processing ||
    parseInt(val) === 0 ||
    parseInt(val) > parseInt(fullDigichainBalance);

  const renderActions = () => {
    if (!account) {
      return <UnlockButton fullWidth />;
    }
    if (isApprovedDigichain) {
      return (
        <Button
          variant="primary"
          onClick={buyGdigi}
          disabled={disabled}
          fullWidth
        >
          {(processing && (
            <>
              {t("LOADING")}
              <Dots />
            </>
          )) ||
            t("CONVERT")}
        </Button>
      );
    }
    if (isApprovingDigichain) {
      return (
        <Button
          variant="primary"
          onClick={handleApproveDigichain}
          disabled={isApprovingDigichain}
          fullWidth
        >
          {t("APPROVE CONTRACT")}
        </Button>
      );
    }
  };

  return (
    <Flex sx={gdigiStyles.gdigiContainer}>
      <Flex
        sx={{
          ...gdigiStyles.headsUp,
          backgroundColor: (isDark && "#FFB30026") || "yellow",
          opacity: (isDark && 1) || 0.7,
        }}
      >
        <Flex sx={gdigiStyles.headsUpHeader}>
          <Heading
            as="h1"
            sx={{
              ...gdigiStyles.warningHeader,
              color: (isDark && "yellow") || "primaryBright",
            }}
          >
            {t("HEADS UP, APES!")}
          </Heading>

          <Flex sx={{ padding: "2px", fontSize: ["14px"] }}>
            <Text sx={gdigiStyles.headsUpDescription}>
              {t(
                "Buying GDIGI involves paying a 28% burn fee and a 2% reflect fee for a total cost of 30%. This means that for every 1 DIGICHAIN you trade in, you will receive 0.7 GDIGI."
              )}
            </Text>
          </Flex>

          <Button
            variant="text"
            sx={gdigiStyles.learnMoreBtn}
            onClick={() =>
              window.open("https://digidex.finance/gdigi", "_blank")
            }
          >
            {t("Learn More")} <ChevronRightIcon color="primaryBright" />
          </Button>
        </Flex>
      </Flex>

      <Flex sx={gdigiStyles.transactions}>
        <Flex sx={{ flexDirection: "column" }}>
          {/* FromTokenInput */}
          <DexPanel
            value={val}
            panelText="From"
            currency={digichainToken}
            otherCurrency={gdigiToken}
            onUserInput={handleChange}
            fieldType={Field.INPUT}
            handleMaxInput={handleSelectMax}
            onCurrencySelect={null}
            disableTokenSelect
          />
          <Text
            sx={{
              color: triedMore ? "#ff0000" : null,
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {t("*Current max conversion is %displayMax%", { displayMax })}
          </Text>
          {/* DownArrow */}
          <Flex sx={gdigiStyles.arrowDownContainer}>
            <Flex sx={gdigiStyles.arrowDown}>
              <Svg icon="arrow" width="8px" color="primaryBright" />
            </Flex>
          </Flex>
          <DexPanel
            value={gdigiVal.toString()}
            panelText="To"
            currency={gdigiToken}
            otherCurrency={digichainToken}
            onUserInput={handleChange}
            fieldType={Field.OUTPUT}
            handleMaxInput={handleSelectMax}
            onCurrencySelect={null}
            disabled
            ordersDisabled
            disableTokenSelect
          />
          {/* ToTokenInput */}
          <Flex sx={{ marginTop: "20px", alignItems: "center" }}>
            <Flex sx={gdigiStyles.checkboxContainer}>
              <Checkbox
                id="checkbox"
                checked={unlimited}
                sx={{ backgroundColor: "white2" }}
                onChange={handleCheckBox}
              />
            </Flex>
            <Text sx={gdigiStyles.checkboxText}>
              {t(
                "I understand how GDIGI works and I want to enable unlimited buy"
              )}
            </Text>
          </Flex>
        </Flex>

        <Flex sx={gdigiStyles.renderActions}>{renderActions()}</Flex>
      </Flex>
    </Flex>
  );
};

export default React.memo(Gdigi);
