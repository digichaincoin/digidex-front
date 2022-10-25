/** @jsxImportSource theme-ui */
import { Flex } from "@digi.swap/uikit";
import React from "react";
import DigichainSupplyDistribution from "./components/DigichainSupplyDistribution";
import MarketCapToTvlRatio from "./components/MarketCapToTvlRatio";
import ProtocolMetricsGraph from "./components/ProtocolMetricGraph";
import ProtocolMetrics from "./components/ProtocolMetrics";
import TotalTradeVolume from "./components/TotalTradeVolume";
import TotalValueLocked from "./components/TotalValueLocked";

const Overview: React.FC = () => {
  return (
    <Flex
      sx={{
        position: "relative",
        maxWidth: "1200px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "no-wrap",
          "@media screen and (max-width: 725px)": {
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      >
        <TotalValueLocked />
        <TotalTradeVolume />
      </Flex>
      <Flex
        sx={{
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "no-wrap",
          "@media screen and (max-width: 725px)": {
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      >
        <MarketCapToTvlRatio />
        <DigichainSupplyDistribution />
      </Flex>
      <Flex
        sx={{
          position: "relative",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "no-wrap",
          "@media screen and (max-width: 725px)": {
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      >
        <ProtocolMetrics />
        <ProtocolMetricsGraph />
      </Flex>
    </Flex>
  );
};

export default React.memo(Overview);
