import { useEffect, useState } from "react";
import addresses from "config/constants/contracts";
import { Address } from "config/constants/types";
import { ChainId, SmartRouter, ZAP_ADDRESS } from "@digi.swap/sdk";
import useActiveWeb3React from "./useActiveWeb3React";

export const parseAddress = (currAddress: Address, chainId: ChainId) => {
  return currAddress[chainId];
};

export const parseSmartAddress = (
  currAddress: Record<ChainId, Record<SmartRouter, string>>,
  chainId: ChainId,
  smartRouter: SmartRouter
) => {
  return currAddress[chainId][smartRouter];
};

const useAddress = (curAddresses: Address) => {
  const { chainId } = useActiveWeb3React();
  const [address, setAddress] = useState(parseAddress(curAddresses, chainId));
  useEffect(() => {
    setAddress(parseAddress(curAddresses, chainId));
  }, [chainId, curAddresses]);
  return address;
};

export const useDigichainAddress = () => {
  return useAddress(addresses.digichain);
};
export const useGoldenDigichainAddress = () => {
  return useAddress(addresses.goldenDigichain);
};
export const useTreasuryAddress = () => {
  return useAddress(addresses.treasury);
};
export const useSyrupAddress = () => {
  return useAddress(addresses.syrup);
};
export const useMasterChefAddress = () => {
  return useAddress(addresses.masterChef);
};
export const useMulticallAddress = () => {
  return useAddress(addresses.mulltiCall);
};
export const useMulticallV3Address = () => {
  return useAddress(addresses.mulltiCallV3);
};
export const useNativeWrapCurrencyAddress = () => {
  return useAddress(addresses.nativeWrapped);
};
export const useLotteryAddress = () => {
  return useAddress(addresses.lottery);
};
export const useLotteryTicketAddress = () => {
  return useAddress(addresses.lotteryNFT);
};
export const useDigichainProfileAddress = () => {
  return useAddress(addresses.digichainProfile);
};
export const useNonFungibleDigisAddress = () => {
  return useAddress(addresses.nonFungibleDigis);
};
export const useRabbitMintingFarmAddress = () => {
  return useAddress(addresses.rabbitMintingFarm);
};
export const useClaimRefundAddress = () => {
  return useAddress(addresses.claimRefund);
};
export const useAuctionAddress = () => {
  return useAddress(addresses.auction);
};
export const useDigichainPriceGetterAddress = () => {
  return useAddress(addresses.digichainPriceGetter);
};

export const useVaultDigiAddressV1 = () => {
  return useAddress(addresses.vaultDigiV1);
};

export const useVaultDigiAddressV2 = () => {
  return useAddress(addresses.vaultDigiV2);
};

export const useMiniChefAddress = () => {
  return useAddress(addresses.miniDigiV2);
};

export const useIazoExposerAddress = () => {
  return useAddress(addresses.iazoExposer);
};

export const useIazoSettingsAddress = () => {
  return useAddress(addresses.iazoSettings);
};

export const useIazoFactoryAddress = () => {
  return useAddress(addresses.iazoFactoryProxy);
};

export const useZapAddress = () => {
  return useAddress(ZAP_ADDRESS);
};

export const useBabTokenAddress = () => {
  return useAddress(addresses.babToken);
};

export const useRaffleAddress = () => {
  return useAddress(addresses.raffle);
};

export const useMigratorBalanceCheckerAddress = () => {
  return useAddress(addresses.migratorBalanceChecker);
};
