import { Currency, SmartRouter, Token } from "@digi.swap/sdk";
import { Contract } from "ethers";
import { useSingleCallResult } from "lib/hooks/multicall";
import store from "state";
import {
  getNativeWrappedAddress,
  getSmartPriceGetter,
} from "utils/addressHelper";
import digichainPriceGetter from "config/abi/digichainPriceGetter.json";
import { getBalanceNumber } from "utils/formatBalance";

export const useTokenPriceUsd = (
  chainId: number,
  currency: Currency,
  lp = false,
  smartRouter?: SmartRouter
) => {
  const isNative = currency?.symbol === "ETH";
  const [address, decimals] =
    currency instanceof Token
      ? [currency?.address, currency?.decimals]
      : ["", 18];
  const priceGetterAddress = getSmartPriceGetter(chainId, smartRouter);
  const priceGetterContract = new Contract(
    priceGetterAddress,
    digichainPriceGetter
  );

  const nativeTokenAddress = getNativeWrappedAddress(chainId);

  const { result } = useSingleCallResult(
    currency ? priceGetterContract : undefined,
    lp ? "getLPPrice" : "getPrice",
    [isNative ? nativeTokenAddress : address, decimals]
  );
  if (currency?.symbol === "GDIGI") {
    return parseFloat(store.getState().tokenPrices.digichainPrice) * 1.3889;
  }
  return result?.[0] ? getBalanceNumber(result[0].toString(), decimals) : 0;
};
