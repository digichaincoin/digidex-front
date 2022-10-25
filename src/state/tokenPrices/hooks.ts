import BigNumber from "bignumber.js";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useRefresh from "hooks/useRefresh";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "state";
import { State, TokenPricesState } from "state/types";
import {
  fetchDigichainPrice,
  fetchTokenPrices,
  setInitialTokensDataAsync,
} from ".";

const ZERO = new BigNumber(0);

export const useFetchTokenPrices = () => {
  const dispatch = useAppDispatch();
  const { fastRefresh } = useRefresh();
  const { chainId } = useActiveWeb3React();
  const { tokens }: TokenPricesState = useSelector(
    (state: State) => state.tokenPrices
  );
  if (tokens.length === 0) {
    dispatch(setInitialTokensDataAsync());
  }
  useEffect(() => {
    dispatch(fetchTokenPrices(chainId, tokens));
  }, [dispatch, fastRefresh, tokens, chainId]);
};

export const useTokenPrices = () => {
  const { isInitialized, isLoading, data }: TokenPricesState = useSelector(
    (state: State) => state.tokenPrices
  );
  return { tokenPrices: data, isInitialized, isLoading };
};

export const useFetchDigichainPrice = () => {
  const { fastRefresh } = useRefresh();
  const { chainId } = useActiveWeb3React();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDigichainPrice(chainId));
  }, [fastRefresh, chainId, dispatch]);
};

export const useDigichainPrice = () => {
  const { digichainPrice }: TokenPricesState = useSelector(
    (state: State) => state.tokenPrices
  );
  return digichainPrice;
};

// Prices
export const usePriceDigichainBusd = (): BigNumber => {
  const tokenPrices = useTokenPrices();
  const price = new BigNumber(
    tokenPrices?.tokenPrices?.find(
      (token) => token.symbol === "DIGICHAIN"
    )?.price
  );
  return price || ZERO;
};

export const usePriceBnbBusd = (): BigNumber => {
  const tokenPrices = useTokenPrices();
  const price = new BigNumber(
    tokenPrices?.tokenPrices?.find((token) => token.symbol === "BNB")?.price
  );
  return price || ZERO;
};

export const usePriceGdigiBusd = (): BigNumber => {
  const digichainPrice = useDigichainPrice();
  return new BigNumber(digichainPrice).times(1.3889);
};
