import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { Text } from "@digidexfinance/uikit";

interface CardValueProps {
  value: number;
  decimals?: number;
  fontSize?: string;
  prefix?: string;
  suffix?: string;
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
  width?: string;
  maxWidth?: string;
}

const CardValue: React.FC<CardValueProps> = ({
  value,
  decimals,
  fontSize = "40px",
  prefix,
  suffix,
  fontFamily,
  fontWeight,
  color,
  width,
  maxWidth,
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ",",
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined
        ? decimals
        : value === 0
        ? 0
        : value < 1
        ? 4
        : value > 1e5
        ? 0
        : 2,
  });

  const updateValue = useRef(update);

  useEffect(() => {
    updateValue.current(value);
  }, [value, updateValue]);

  return (
    <Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      style={{ width: `${width}`, maxWidth: `${maxWidth}` }}
    >
      {prefix}
      {countUp} {suffix}
    </Text>
  );
};

export default CardValue;
