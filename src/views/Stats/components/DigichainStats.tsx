import React, { useMemo } from "react";
import { Card, Heading, Text } from "@digidexfinance/uikit";
import styled from "styled-components";
import { Stats } from "state/types";
import { usePriceDigichainBusd } from "state/tokenPrices/hooks";
import { Box } from "theme-ui";
import useTokenBalance from "hooks/useTokenBalance";
import { useGoldenDigichainAddress } from "hooks/useAddress";
import { getFullDisplayBalance } from "utils/formatBalance";
import CardValue from "./CardValue";
import Divider from "./Divider";
import { useTranslation } from "../../../contexts/Localization";

export interface DigichainStatsProps {
  stats?: Stats;
}

const StyledDigichainStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DigichainStats: React.FC<DigichainStatsProps> = ({ stats }) => {
  const { t } = useTranslation();
  const price = usePriceDigichainBusd();
  const goldenDigichainBalance = useTokenBalance(useGoldenDigichainAddress());

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(goldenDigichainBalance);
  }, [goldenDigichainBalance]);

  return (
    <StyledDigichainStats>
      <Box>
        <Heading>{t("Your Digi Stats")}</Heading>
        <Row>
          <Text fontWeight={800} fontSize="14px">
            {t("TVL All Pools")}
          </Text>
          <CardValue
            fontSize="14px"
            decimals={2}
            value={stats.tvl}
            prefix="$"
          />
        </Row>
        <Row>
          <Text fontWeight={800} fontSize="14px">
            {t("GDIGI Holdings")}
          </Text>
          <CardValue
            fontWeight={800}
            fontSize="14px"
            value={parseFloat(fullBalance)}
            decimals={2}
          />
        </Row>
        <Row>
          <Text fontWeight={800} fontSize="14px">
            {t("DIGICHAIN Price")}
          </Text>
          <CardValue
            fontWeight={800}
            fontSize="14px"
            value={price.toNumber()}
            decimals={2}
            prefix="$"
          />
        </Row>
        <Row style={{ alignItems: "flex-start" }}>
          <Text fontWeight={800} fontSize="14px">
            {t("Your DIGICHAIN earnings ($)")}
          </Text>
          <Text fontWeight={800} fontSize="14px" style={{ textAlign: "end" }}>
            <Divider />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.digichainsEarnedPerDay}
              decimals={2}
              prefix="Daily: "
            />
            <CardValue
              fontWeight={800}
              fontSize="12px"
              value={stats.dollarsEarnedPerDay}
              decimals={2}
              prefix="($"
              suffix=")"
            />
            <Divider />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.digichainsEarnedPerWeek}
              decimals={2}
              prefix="Weekly: "
            />
            <CardValue
              fontWeight={800}
              fontSize="12px"
              value={stats.dollarsEarnedPerWeek}
              decimals={2}
              prefix="($"
              suffix=")"
            />
            <Divider />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.digichainsEarnedPerMonth}
              decimals={2}
              prefix="Monthly: "
            />
            <CardValue
              fontWeight={800}
              fontSize="12px"
              value={stats.dollarsEarnedPerMonth}
              decimals={2}
              prefix="($"
              suffix=")"
            />
            <Divider />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.digichainsEarnedPerYear}
              decimals={2}
              prefix="Yearly: "
            />
            <CardValue
              fontWeight={800}
              fontSize="12px"
              value={stats.dollarsEarnedPerYear}
              decimals={2}
              prefix="($"
              suffix=")"
            />
            <Divider />
          </Text>
        </Row>
        <Row style={{ alignItems: "flex-start" }}>
          <Text fontWeight={800} fontSize="14px">
            {t("Your APR (%)")}
          </Text>
          <Text fontWeight={800} fontSize="14px" style={{ textAlign: "end" }}>
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.aggregateAprPerDay * 100}
              decimals={2}
              prefix={t("Daily")}
              suffix="%"
            />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.aggregateAprPerWeek * 100}
              decimals={2}
              prefix={t("Weekly")}
              suffix="%"
            />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.aggregateAprPerMonth * 100}
              decimals={2}
              prefix={t("Monthly")}
              suffix="%"
            />
            <CardValue
              fontWeight={800}
              fontSize="14px"
              value={stats.aggregateApr * 100}
              decimals={2}
              prefix={t("Yearly")}
              suffix="%"
            />
          </Text>
        </Row>
      </Box>
    </StyledDigichainStats>
  );
};

export default DigichainStats;
