import {
  getDigichainPriceGetterAddress,
  getNativeWrappedAddress,
  getSmartPriceGetter,
} from "utils/addressHelper";
import digichainPriceGetterABI from "config/abi/digichainPriceGetter.json";
import { getBalanceNumber } from "utils/formatBalance";
import multicall from "utils/multicall";
import { Currency, SmartRouter, Token } from "@digi.swap/sdk";
import store from "../state";

export const getTokenUsdPrice = async (
  chainId: number,
  tokenAddress: string,
  tokenDecimal: number,
  lp?: boolean,
  isNative?: boolean
) => {
  const priceGetterAddress = getDigichainPriceGetterAddress(chainId);
  const nativeTokenAddress = getNativeWrappedAddress(chainId);
  if (!priceGetterAddress) return 0;
  if ((tokenAddress || isNative) && tokenDecimal) {
    const call = lp
      ? {
          address: priceGetterAddress,
          name: "getLPPrice",
          params: [tokenAddress, 18],
        }
      : {
          address: priceGetterAddress,
          name: "getPrice",
          params: [isNative ? nativeTokenAddress : tokenAddress, tokenDecimal],
        };

    const tokenPrice = await multicall(chainId, digichainPriceGetterABI, [
      call,
    ]);
    const filterPrice = getBalanceNumber(tokenPrice[0], tokenDecimal);
    return filterPrice;
  }
  return null;
};

export const getCurrencyUsdPrice = async (
  chainId: number,
  currency: Currency,
  lp = false,
  smartRouter?: SmartRouter
) => {
  if (!currency) {
    return null;
  }

  if (currency?.symbol === "GDIGI") {
    return parseFloat(store.getState().tokenPrices.digichainPrice) * 1.3889;
  }
  const isNative = currency?.symbol === "ETH";
  const [address, decimals] =
    currency instanceof Token
      ? [currency?.address, currency?.decimals]
      : ["", 18];
  const priceGetterAddress = getSmartPriceGetter(chainId, smartRouter);

  const nativeTokenAddress = getNativeWrappedAddress(chainId);
  if ((address || isNative) && decimals) {
    const call = lp
      ? {
          address: priceGetterAddress,
          name: "getLPPrice",
          params: [address, 18],
        }
      : {
          address: priceGetterAddress,
          name: "getPrice",
          params: [isNative ? nativeTokenAddress : address, decimals],
        };
    const tokenPrice = await multicall(chainId, digichainPriceGetterABI, [
      call,
    ]);
    return getBalanceNumber(tokenPrice[0], decimals);
  }
  return null;
};
