import { Pair, SmartRouter, Token } from "@digi.swap/sdk";
import flatMap from "lodash/flatMap";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BASES_TO_TRACK_LIQUIDITY_FOR,
  PINNED_PAIRS,
  SHOW_MODAL_TYPES,
} from "config/constants";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useAllTokens, useDefaultTokens } from "hooks/Tokens";
import { AppDispatch, AppState } from "../../index";
import {
  addSerializedPair,
  addSerializedToken,
  FarmStakedOnly,
  muteAudio,
  removeSerializedToken,
  SerializedPair,
  toggleTheme as toggleThemeAction,
  unmuteAudio,
  updateUserDeadline,
  updateUserExpertMode,
  updateUserRecentTransactions,
  updateUserFarmStakedOnly,
  updateUserSingleHopOnly,
  updateUserSlippageTolerance,
  addWatchlistToken,
  addWatchlistPool,
  updateUserPoolStakedOnly,
  updateUserPoolsViewMode,
  ViewMode,
  updateUserFarmsViewMode,
  updateUserPredictionChartDisclaimerShow,
  updateUserPredictionAcceptedRisk,
  updateUserUsernameVisibility,
  updateUserExpertModeAcknowledgementShow,
  hidePhishingWarningBanner,
  setIsExchangeChartDisplayed,
  updateUserAutonomyPrepay,
  lastZapMigratorRouter,
  setUnlimitedGdigi,
  setShowModal,
  updateUserBonusRouter,
  setZapSlippage,
} from "../actions";
import { deserializeToken, serializeToken } from "./helpers";
import { PairState, usePairs } from "hooks/usePairs";

export function useAudioModeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const audioPlay = useSelector<AppState, AppState["user"]["audioPlay"]>(
    (state) => state.user.audioPlay
  );

  const toggleSetAudioMode = useCallback(() => {
    if (audioPlay) {
      dispatch(muteAudio());
    } else {
      dispatch(unmuteAudio());
    }
  }, [audioPlay, dispatch]);

  return [audioPlay, toggleSetAudioMode];
}

export function usePhishingBannerManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const showPhishingWarningBanner = useSelector<
    AppState,
    AppState["user"]["showPhishingWarningBanner"]
  >((state) => state.user.showPhishingWarningBanner);

  const hideBanner = useCallback(() => {
    dispatch(hidePhishingWarningBanner());
  }, [dispatch]);

  return [showPhishingWarningBanner, hideBanner];
}

// Get user preference for exchange price chart
// For mobile layout chart is hidden by default
export function useExchangeChartManager(
  isMobile: boolean
): [boolean, (isDisplayed: boolean) => void] {
  const dispatch = useDispatch<AppDispatch>();
  const isChartDisplayed = useSelector<
    AppState,
    AppState["user"]["isExchangeChartDisplayed"]
  >((state) => state.user.isExchangeChartDisplayed);

  const setUserChartPreference = useCallback(
    (isDisplayed: boolean) => {
      dispatch(setIsExchangeChartDisplayed(isDisplayed));
    },
    [dispatch]
  );

  return [isMobile ? false : isChartDisplayed, setUserChartPreference];
}

export function useIsExpertMode(): boolean {
  return useSelector<AppState, AppState["user"]["userExpertMode"]>(
    (state) => state.user.userExpertMode
  );
}

export function useExpertModeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const expertMode = useIsExpertMode();

  const toggleSetExpertMode = useCallback(() => {
    dispatch(updateUserExpertMode({ userExpertMode: !expertMode }));
  }, [expertMode, dispatch]);

  return [expertMode, toggleSetExpertMode];
}

export function useBonusRouterManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const bonusRouterDisabled = useSelector<
    AppState,
    AppState["user"]["userBonusRouterDisabled"]
  >((state) => state.user.userBonusRouterDisabled);

  const toggleSetBonusRouter = useCallback(() => {
    dispatch(
      updateUserBonusRouter({ userBonusRouterDisabled: !bonusRouterDisabled })
    );
  }, [bonusRouterDisabled, dispatch]);

  return [bonusRouterDisabled, toggleSetBonusRouter];
}

export function useThemeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector<AppState, AppState["user"]["isDark"]>(
    (state) => state.user.isDark
  );

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  return [isDark, toggleTheme];
}

export function useLastZapMigratorRouter(): [
  SmartRouter,
  (router: SmartRouter) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const zapMigratorRouter = useSelector<
    AppState,
    AppState["user"]["zapMigratorRouter"]
  >((state) => state.user.zapMigratorRouter);

  const updateLastZapMigratorRouter = useCallback(
    (router: SmartRouter) => {
      dispatch(lastZapMigratorRouter({ router }));
    },
    [dispatch]
  );

  return [zapMigratorRouter, updateLastZapMigratorRouter];
}

export function useUserSingleHopOnly(): [
  boolean,
  (newSingleHopOnly: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();

  const singleHopOnly = useSelector<
    AppState,
    AppState["user"]["userSingleHopOnly"]
  >((state) => state.user.userSingleHopOnly);

  const setSingleHopOnly = useCallback(
    (newSingleHopOnly: boolean) => {
      dispatch(
        updateUserSingleHopOnly({ userSingleHopOnly: newSingleHopOnly })
      );
    },
    [dispatch]
  );

  return [singleHopOnly, setSingleHopOnly];
}

export function useUserAutonomyPrepay(): [
  boolean,
  (newAutonomyPrepay: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();

  const autonomyPrepay = useSelector<
    AppState,
    AppState["user"]["userAutonomyPrepay"]
  >((state) => state.user.userAutonomyPrepay);

  const setAutonomyPrepay = useCallback(
    (newAutonomyPrepay: boolean) => {
      dispatch(
        updateUserAutonomyPrepay({ userAutonomyPrepay: newAutonomyPrepay })
      );
    },
    [dispatch]
  );

  return [autonomyPrepay, setAutonomyPrepay];
}

export function useUserRecentTransactions(): [
  boolean,
  (recentTransaction: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();

  const recentTransactions = useSelector<
    AppState,
    AppState["user"]["userRecentTransactions"]
  >((state) => state.user.userRecentTransactions);

  const setRecentTransactions = useCallback(
    (newResentTransactions: boolean) => {
      dispatch(
        updateUserRecentTransactions({
          userRecentTransactions: newResentTransactions,
        })
      );
    },
    [dispatch]
  );

  return [recentTransactions, setRecentTransactions];
}

export function useUserSlippageTolerance(
  isZap?: boolean
): [number, (slippage: number) => void] {
  const dispatch = useDispatch<AppDispatch>();

  const zapSlippageTolerance = useSelector<
    AppState,
    AppState["user"]["userZapSlippage"]
  >((state) => {
    return state.user.userZapSlippage;
  });
  const setZapSlippageTolerance = useCallback(
    (slippage: number) => {
      dispatch(setZapSlippage({ userZapSlippage: slippage }));
    },
    [dispatch]
  );

  const userSlippageTolerance = useSelector<
    AppState,
    AppState["user"]["userSlippageTolerance"]
  >((state) => {
    return state.user.userSlippageTolerance;
  });
  const setUserSlippageTolerance = useCallback(
    (slippage: number) => {
      dispatch(
        updateUserSlippageTolerance({ userSlippageTolerance: slippage })
      );
    },
    [dispatch]
  );

  if (isZap) return [zapSlippageTolerance, setZapSlippageTolerance];
  return [userSlippageTolerance, setUserSlippageTolerance];
}

export function useUserFarmStakedOnly(
  isActive: boolean
): [boolean, (stakedOnly: boolean) => void] {
  const dispatch = useDispatch<AppDispatch>();
  const userFarmStakedOnly = useSelector<
    AppState,
    AppState["user"]["userFarmStakedOnly"]
  >((state) => {
    return state.user.userFarmStakedOnly;
  });

  const setUserFarmStakedOnly = useCallback(
    (stakedOnly: boolean) => {
      const farmStakedOnly = stakedOnly
        ? FarmStakedOnly.TRUE
        : FarmStakedOnly.FALSE;
      dispatch(
        updateUserFarmStakedOnly({ userFarmStakedOnly: farmStakedOnly })
      );
    },
    [dispatch]
  );

  return [
    userFarmStakedOnly === FarmStakedOnly.ON_FINISHED
      ? !isActive
      : userFarmStakedOnly === FarmStakedOnly.TRUE,
    setUserFarmStakedOnly,
  ];
}

export function useUserPoolStakedOnly(): [
  boolean,
  (stakedOnly: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userPoolStakedOnly = useSelector<
    AppState,
    AppState["user"]["userPoolStakedOnly"]
  >((state) => {
    return state.user.userPoolStakedOnly;
  });

  const setUserPoolStakedOnly = useCallback(
    (stakedOnly: boolean) => {
      dispatch(updateUserPoolStakedOnly({ userPoolStakedOnly: stakedOnly }));
    },
    [dispatch]
  );

  return [userPoolStakedOnly, setUserPoolStakedOnly];
}

export function useUserPoolsViewMode(): [
  ViewMode,
  (viewMode: ViewMode) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userPoolsViewMode = useSelector<
    AppState,
    AppState["user"]["userPoolsViewMode"]
  >((state) => {
    return state.user.userPoolsViewMode;
  });

  const setUserPoolsViewMode = useCallback(
    (viewMode: ViewMode) => {
      dispatch(updateUserPoolsViewMode({ userPoolsViewMode: viewMode }));
    },
    [dispatch]
  );

  return [userPoolsViewMode, setUserPoolsViewMode];
}

export function useUserFarmsViewMode(): [
  ViewMode,
  (viewMode: ViewMode) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userFarmsViewMode = useSelector<
    AppState,
    AppState["user"]["userFarmsViewMode"]
  >((state) => {
    return state.user.userFarmsViewMode;
  });

  const setUserFarmsViewMode = useCallback(
    (viewMode: ViewMode) => {
      dispatch(updateUserFarmsViewMode({ userFarmsViewMode: viewMode }));
    },
    [dispatch]
  );

  return [userFarmsViewMode, setUserFarmsViewMode];
}

export function useUserPredictionAcceptedRisk(): [
  boolean,
  (acceptedRisk: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userPredictionAcceptedRisk = useSelector<
    AppState,
    AppState["user"]["userPredictionAcceptedRisk"]
  >((state) => {
    return state.user.userPredictionAcceptedRisk;
  });

  const setUserPredictionAcceptedRisk = useCallback(
    (acceptedRisk: boolean) => {
      dispatch(
        updateUserPredictionAcceptedRisk({ userAcceptedRisk: acceptedRisk })
      );
    },
    [dispatch]
  );

  return [userPredictionAcceptedRisk, setUserPredictionAcceptedRisk];
}

export function useUserPredictionChartDisclaimerShow(): [
  boolean,
  (showDisclaimer: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userPredictionChartDisclaimerShow = useSelector<
    AppState,
    AppState["user"]["userPredictionChartDisclaimerShow"]
  >((state) => {
    return state.user.userPredictionChartDisclaimerShow;
  });

  const setPredictionUserChartDisclaimerShow = useCallback(
    (showDisclaimer: boolean) => {
      dispatch(
        updateUserPredictionChartDisclaimerShow({
          userShowDisclaimer: showDisclaimer,
        })
      );
    },
    [dispatch]
  );

  return [
    userPredictionChartDisclaimerShow,
    setPredictionUserChartDisclaimerShow,
  ];
}

export function useUserExpertModeAcknowledgementShow(): [
  boolean,
  (showAcknowledgement: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userExpertModeAcknowledgementShow = useSelector<
    AppState,
    AppState["user"]["userExpertModeAcknowledgementShow"]
  >((state) => {
    return state.user.userExpertModeAcknowledgementShow;
  });

  const setUserExpertModeAcknowledgementShow = useCallback(
    (showAcknowledgement: boolean) => {
      dispatch(
        updateUserExpertModeAcknowledgementShow({
          userExpertModeAcknowledgementShow: showAcknowledgement,
        })
      );
    },
    [dispatch]
  );

  return [
    userExpertModeAcknowledgementShow,
    setUserExpertModeAcknowledgementShow,
  ];
}

export function useUserUsernameVisibility(): [
  boolean,
  (usernameVisibility: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();
  const userUsernameVisibility = useSelector<
    AppState,
    AppState["user"]["userUsernameVisibility"]
  >((state) => {
    return state.user.userUsernameVisibility;
  });

  const setUserUsernameVisibility = useCallback(
    (usernameVisibility: boolean) => {
      dispatch(
        updateUserUsernameVisibility({
          userUsernameVisibility: usernameVisibility,
        })
      );
    },
    [dispatch]
  );

  return [userUsernameVisibility, setUserUsernameVisibility];
}

export function useUserTransactionTTL(): [number, (slippage: number) => void] {
  const dispatch = useDispatch<AppDispatch>();
  const userDeadline = useSelector<AppState, AppState["user"]["userDeadline"]>(
    (state) => {
      return state.user.userDeadline;
    }
  );

  const setUserDeadline = useCallback(
    (deadline: number) => {
      dispatch(updateUserDeadline({ userDeadline: deadline }));
    },
    [dispatch]
  );

  return [userDeadline, setUserDeadline];
}

export function useAddUserToken(): (token: Token) => void {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (token: Token) => {
      dispatch(addSerializedToken({ serializedToken: serializeToken(token) }));
    },
    [dispatch]
  );
}

export function useRemoveUserAddedToken(): (
  chainId: number,
  address: string
) => void {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (chainId: number, address: string) => {
      dispatch(removeSerializedToken({ chainId, address }));
    },
    [dispatch]
  );
}

function serializePair(pair: Pair): SerializedPair {
  return {
    token0: serializeToken(pair.token0),
    token1: serializeToken(pair.token1),
  };
}

export function usePairAdder(): (pair: Pair) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(
    (pair: Pair) => {
      dispatch(addSerializedPair({ serializedPair: serializePair(pair) }));
    },
    [dispatch]
  );
}

/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 * @param smartRouter the router to be used
 */

export function toV2LiquidityToken(
  [tokenA, tokenB]: [Token, Token],
  smartRouter?: SmartRouter
): Token {
  return new Token(
    tokenA.chainId,
    Pair.getAddress(tokenA, tokenB, smartRouter || SmartRouter.DIGI),
    18,
    `${smartRouter || "Ape"}-LP`,
    `${smartRouter || "Digiswapp"} LPs`
  );
}

/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */
export function useTrackedTokenPairs(): [Token, Token][] {
  const { chainId } = useActiveWeb3React();
  const tokens = useAllTokens();

  // pinned pairs
  const pinnedPairs = useMemo(
    () => (chainId ? PINNED_PAIRS[chainId] ?? [] : []),
    [chainId]
  );

  // pairs for every token against every base
  const generatedPairs: [Token, Token][] = useMemo(
    () =>
      chainId
        ? flatMap(Object.keys(tokens), (tokenAddress) => {
            const token = tokens[tokenAddress];
            // for each token on the current chain,
            return (
              // loop though all bases on the current chain
              (BASES_TO_TRACK_LIQUIDITY_FOR[chainId] ?? [])
                // to construct pairs of the given token with each base
                .map((base) => {
                  if (base.address === token.address) {
                    return null;
                  }
                  return [base, token];
                })
                .filter((p): p is [Token, Token] => p !== null)
            );
          })
        : [],
    [tokens, chainId]
  );

  // pairs saved by users
  const savedSerializedPairs = useSelector<AppState, AppState["user"]["pairs"]>(
    ({ user: { pairs } }) => pairs
  );

  const userPairs: [Token, Token][] = useMemo(() => {
    if (!chainId || !savedSerializedPairs) return [];
    const forChain = savedSerializedPairs[chainId];
    if (!forChain) return [];

    return Object.keys(forChain).map((pairId) => {
      return [
        deserializeToken(forChain[pairId].token0),
        deserializeToken(forChain[pairId].token1),
      ];
    });
  }, [savedSerializedPairs, chainId]);

  const combinedList = useMemo(
    () => userPairs.concat(generatedPairs).concat(pinnedPairs),
    [generatedPairs, pinnedPairs, userPairs]
  );

  return useMemo(() => {
    // dedupes pairs of tokens in the combined list
    const keyed = combinedList.reduce<{ [key: string]: [Token, Token] }>(
      (memo, [tokenA, tokenB]) => {
        const sorted = tokenA.sortsBefore(tokenB);
        const key = sorted
          ? `${tokenA.address}:${tokenB.address}`
          : `${tokenB.address}:${tokenA.address}`;
        if (memo[key]) return memo;
        memo[key] = sorted ? [tokenA, tokenB] : [tokenB, tokenA];
        return memo;
      },
      {}
    );

    return Object.keys(keyed).map((key) => keyed[key]);
  }, [combinedList]);
}

/**
 * Returns all the valid pairs of tokens that are tracked by the user for the current chain ID.
 */
export function useValidTrackedTokenPairs(): [Token, Token][] {
  const { chainId } = useActiveWeb3React();
  const tokens = useDefaultTokens();

  // pairs for every token against every base
  const generatedPairs: [Token, Token][] = useMemo(
    () =>
      chainId
        ? flatMap(Object.keys(tokens), (tokenAddress) => {
            const token = tokens[tokenAddress];
            // for each token on the current chain,
            return (
              // loop though all bases on the current chain
              (BASES_TO_TRACK_LIQUIDITY_FOR[chainId] ?? [])
                // to construct pairs of the given token with each base
                .map((base) => {
                  if (base.address === token.address) {
                    return null;
                  }
                  return [base, token];
                })
                .filter((p): p is [Token, Token] => p !== null)
            );
          })
        : [],
    [tokens, chainId]
  );

  const filterInvalidPairs = usePairs(
    useMemo(() => generatedPairs, [generatedPairs])
  )?.filter((pair) => pair[0] === PairState.EXISTS);

  const filteredGeneratedPair: [Token, Token][] = useMemo(() => {
    return filterInvalidPairs?.map(([, pair]) => {
      return [pair.token0, pair.token1];
    });
  }, [filterInvalidPairs]);

  return useMemo(() => {
    // dedupes pairs of tokens in the combined list
    const keyed = filteredGeneratedPair.reduce<{
      [key: string]: [Token, Token];
    }>((memo, [tokenA, tokenB]) => {
      const sorted = tokenA.sortsBefore(tokenB);
      const key = sorted
        ? `${tokenA.address}:${tokenB.address}`
        : `${tokenB.address}:${tokenA.address}`;
      if (memo[key]) return memo;
      memo[key] = sorted ? [tokenA, tokenB] : [tokenB, tokenA];
      return memo;
    }, {});

    return Object.keys(keyed).map((key) => keyed[key]);
  }, [filteredGeneratedPair]);
}

export const useWatchlistTokens = (): [string[], (address: string) => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const savedTokens =
    useSelector((state: AppState) => state.user.watchlistTokens) ?? [];
  const updatedSavedTokens = useCallback(
    (address: string) => {
      dispatch(addWatchlistToken({ address }));
    },
    [dispatch]
  );
  return [savedTokens, updatedSavedTokens];
};

export const useWatchlistPools = (): [string[], (address: string) => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const savedPools =
    useSelector((state: AppState) => state.user.watchlistPools) ?? [];
  const updateSavedPools = useCallback(
    (address: string) => {
      dispatch(addWatchlistPool({ address }));
    },
    [dispatch]
  );
  return [savedPools, updateSavedPools];
};

export function useUserUnlimitedGdigi(): [
  boolean,
  (allowUnlimitedGdigi: boolean) => void
] {
  const dispatch = useDispatch<AppDispatch>();

  const unlimitedGdigi = useSelector<
    AppState,
    AppState["user"]["unlimitedGdigi"]
  >((state) => state.user.unlimitedGdigi);

  const setUnlimitedGdigiMinting = useCallback(
    (allowUnlimitedGdigi: boolean) => {
      dispatch(setUnlimitedGdigi(allowUnlimitedGdigi));
    },
    [dispatch]
  );

  return [unlimitedGdigi, setUnlimitedGdigiMinting];
}

export const useIsModalShown = () => {
  const isModalShown = useSelector<AppState, AppState["user"]["showModal"]>(
    (state) => state.user.showModal
  );

  return { ...isModalShown };
};

export const useShowModal = (actionType: string, flag: boolean) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleShowModal = useCallback(() => {
    dispatch(
      setShowModal({ actionType: SHOW_MODAL_TYPES[actionType], flag: !flag })
    );
  }, [actionType, dispatch, flag]);

  return [toggleShowModal];
};
