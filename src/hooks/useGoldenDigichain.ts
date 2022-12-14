import { useCallback } from "react";
import { useTreasury } from "hooks/useContract";
import BigNumber from "bignumber.js";
import track from "utils/track";

export const buy = async (contract, amount) => {
  try {
    return contract
      .buy(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .then((tx) => {
        return tx.hash;
      });
  } catch (err) {
    return console.warn(err);
  }
};

export const sell = async (contract, amount) => {
  try {
    return contract
      .sell(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .then((tx) => {
        return tx.hash;
      });
  } catch (err) {
    return console.warn(err);
  }
};

export const useSellGoldenDigichain = () => {
  const treasuryContract = useTreasury();

  const handleSell = useCallback(
    async (amount: string) => {
      try {
        const txHash = await sell(treasuryContract, amount);
        track({
          event: "gdigi",
          chain: 56,
          data: {
            amount,
            cat: "sell",
          },
        });
        return txHash;
      } catch (e) {
        return false;
      }
    },
    [treasuryContract]
  );

  return { handleSell };
};

export const useBuyGoldenDigichain = () => {
  const treasuryContract = useTreasury();

  const handleBuy = useCallback(
    async (amount: string) => {
      try {
        const txHash = await buy(treasuryContract, amount);
        track({
          event: "gdigi",
          chain: 56,
          data: {
            amount,
            cat: "buy",
          },
        });
        return txHash;
      } catch (e) {
        return false;
      }
    },
    [treasuryContract]
  );

  return { handleBuy };
};
