/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "config/constants/types";
import { getTokenUsdPrice } from "utils/getTokenUsdPrice";
import { getDigichainAddress } from "utils/addressHelper";
import fetchPrices from "./fetchPrices";
import { TokenPricesState, TokenPrices, AppThunk } from "../types";
import fetchTokenPriceConfig from "./api";

const initialState: TokenPricesState = {
  isTokensInitialized: false,
  isInitialized: false,
  isLoading: true,
  tokens: [],
  digichainPrice: null,
  data: null,
};

export const tokenPricesSlice = createSlice({
  name: "tokenPrices",
  initialState,
  reducers: {
    tokenPricesFetchStart: (state) => {
      state.isLoading = true;
    },
    setDigichainPrice: (state, action) => {
      state.digichainPrice = action.payload;
      state.isInitialized = true;
    },
    setIntialTokens: (state, action) => {
      state.tokens = action.payload;
      state.isInitialized = true;
    },
    tokenPricesFetchSucceeded: (
      state,
      action: PayloadAction<TokenPrices[]>
    ) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isInitialized = true;
    },
    tokenPricesFetchFailed: (state) => {
      state.isLoading = false;
      state.isInitialized = true;
    },
  },
});

// Actions
export const {
  setDigichainPrice,
  setIntialTokens,
  tokenPricesFetchStart,
  tokenPricesFetchSucceeded,
  tokenPricesFetchFailed,
} = tokenPricesSlice.actions;

export const setInitialTokensDataAsync = () => async (dispatch) => {
  try {
    const initialTokensState: Token[] = await fetchTokenPriceConfig();
    dispatch(setIntialTokens(initialTokensState || []));
  } catch (error) {
    console.error(error);
  }
};

export const fetchTokenPrices =
  (chainId, tokens): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(tokenPricesFetchStart());
      const tokenPrices = await fetchPrices(chainId, tokens);
      dispatch(tokenPricesFetchSucceeded(tokenPrices));
    } catch (error) {
      dispatch(tokenPricesFetchFailed());
    }
  };

export const fetchDigichainPrice =
  (chainId): AppThunk =>
  async (dispatch) => {
    try {
      const digichainPrice = await getTokenUsdPrice(
        chainId,
        getDigichainAddress(chainId),
        18
      );
      dispatch(setDigichainPrice(digichainPrice));
    } catch {}
  };

export default tokenPricesSlice.reducer;
