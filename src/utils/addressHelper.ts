import { SmartRouter } from "@digi.swap/sdk";
import { SMART_PRICE_GETTERS } from "config/constants/chains";
import addresses from "config/constants/contracts";

export const getDigichainAddress = (chainId: number) => {
  return addresses.digichain[chainId];
};
export const getGoldenDigichainAddress = (chainId: number) => {
  return addresses.goldenDigichain[chainId];
};
export const getTreasuryAddress = (chainId: number) => {
  return addresses.treasury[chainId];
};
export const getSyrupAddress = (chainId: number) => {
  return addresses.syrup[chainId];
};
export const getMasterChefAddress = (chainId: number) => {
  return addresses.masterChef[chainId];
};
export const getMulticallAddress = (chainId: number) => {
  return addresses.mulltiCall[chainId];
};
export const getWbnbAddress = (chainId: number) => {
  return addresses.wbnb[chainId];
};
export const getLotteryAddress = (chainId: number) => {
  return addresses.lottery[chainId];
};
export const getLotteryTicketAddress = (chainId: number) => {
  return addresses.lotteryNFT[chainId];
};
export const getDigichainProfileAddress = (chainId: number) => {
  return addresses.digichainProfile[chainId];
};
export const getNonFungibleDigisAddress = (chainId: number) => {
  return addresses.nonFungibleDigis[chainId];
};
export const getNonFungibleDigichainsAddress = (chainId: number) => {
  return addresses.nonFungibleDigichains[chainId];
};
export const getRabbitMintingFarmAddress = (chainId: number) => {
  return addresses.rabbitMintingFarm[chainId];
};
export const getClaimRefundAddress = (chainId: number) => {
  return addresses.claimRefund[chainId];
};
export const getAuctionAddress = (chainId: number) => {
  return addresses.auction[chainId];
};
export const getDigichainPriceGetterAddress = (chainId: number) => {
  return addresses.digichainPriceGetter[chainId];
};
export const getSmartPriceGetter = (
  chainId: number,
  smartRouter?: SmartRouter
) => {
  return SMART_PRICE_GETTERS[chainId][smartRouter || SmartRouter.DIGI];
};
export const getVaultDigiAddressV1 = (chainId: number) => {
  return addresses.vaultDigiV1[chainId];
};
export const getVaultDigiAddressV2 = (chainId: number) => {
  return addresses.vaultDigiV2[chainId];
};
export const getMiniChefAddress = (chainId: number) => {
  return addresses.miniDigiV2[chainId];
};
export const getNativeWrappedAddress = (chainId: number) => {
  return addresses.nativeWrapped[chainId];
};
export const getIazoExposerAddress = (chainId: number) => {
  return addresses.iazoExposer[chainId];
};
export const getIazoSettingsAddress = (chainId: number) => {
  return addresses.iazoSettings[chainId];
};
export const getIazoFactoryAddress = (chainId: number) => {
  return addresses.iazoFactoryProxy[chainId];
};
export const getMigratorBalanceCheckerAddress = (chainId: number) => {
  return addresses.migratorBalanceChecker[chainId];
};
