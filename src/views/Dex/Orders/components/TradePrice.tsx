import React from "react";
import { Price } from "@digi.swap/sdk";
import { Text } from "@digi.swap/uikit";
import useActiveWeb3React from "hooks/useActiveWeb3React";

interface TradePriceProps {
  price?: Price;
  showInverted: boolean;
  setShowInverted: (showInverted: boolean) => void;
  color?: string;
}

export default function TradePrice({
  price,
  showInverted,
  setShowInverted,
}: TradePriceProps) {
  const { chainId } = useActiveWeb3React();
  const formattedPrice = showInverted
    ? price?.toSignificant(6)
    : price?.invert()?.toSignificant(6);

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency);
  const label = showInverted
    ? `1 ${price?.baseCurrency?.getSymbol(
        chainId
      )} = ${formattedPrice} ${price?.quoteCurrency?.getSymbol(chainId)}`
    : `1 ${price?.quoteCurrency?.getSymbol(
        chainId
      )} = ${formattedPrice} ${price?.baseCurrency?.getSymbol(chainId)}`;

  return (
    <Text
      size="12px"
      sx={{ fontWeight: "500" }}
      onClick={() => setShowInverted(!showInverted)}
    >
      {show && label}
    </Text>
  );
}
