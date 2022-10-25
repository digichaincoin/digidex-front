import BigNumber from "bignumber.js";
import { VaultConfig } from "config/constants/types";
import { FarmLpAprsType, TokenPrices, Vault } from "state/types";
import { getFarmApr } from "utils/apr";
import {
  getRoi,
  tokenEarnedPerThousandDollarsCompounding,
  tokenEarnedPerThousandDollarsCompoundingMax,
} from "utils/compoundApyHelpers";
import { getBalanceNumber } from "utils/formatBalance";

const cleanVaultData = (
  vaultIds: number[],
  chunkedVaults: any[],
  vaultSettings: any[],
  tokenPrices: TokenPrices[],
  farmLpAprs: FarmLpAprsType,
  chainId: number,
  vaultsConfig: Vault[]
) => {
  const keeperFee = parseFloat(vaultSettings[1]) / 100;
  const withdrawFee = parseFloat(vaultSettings[5]) / 100;
  const data = chunkedVaults.map((chunk, index) => {
    const filteredVaults = vaultsConfig.filter((vault) =>
      vault.availableChains.includes(chainId)
    );
    const vaultConfig: VaultConfig = filteredVaults?.find(
      (vault) => vault.id === vaultIds[index]
    );
    const [
      totalAllocPoint,
      poolInfo,
      userInfo,
      stakeTokenMCBalance,
      digichainPoolInfo,
      digichainPoolTotalStaked,
    ] = chunk;

    const rewardTokenPriceUsd = tokenPrices?.find(
      (token) =>
        token.address[chainId]?.toLowerCase() ===
        vaultConfig.masterchef.rewardToken.address[chainId]?.toLowerCase()
    )?.price;
    const stakeTokenPriceUsd = tokenPrices?.find(
      (token) =>
        token.address[chainId]?.toLowerCase() ===
        vaultConfig.stakeToken.address[chainId]?.toLowerCase()
    )?.price;

    // Strat info
    const allocPoint = new BigNumber(poolInfo.allocPoint?._hex);
    const strategyPairBalance = userInfo.amount.toString();
    const weight = totalAllocPoint
      ? allocPoint.div(new BigNumber(totalAllocPoint))
      : new BigNumber(0);
    const totalTokensStaked = getBalanceNumber(
      new BigNumber(strategyPairBalance)
    );
    const totalTokensStakedMC = getBalanceNumber(
      new BigNumber(stakeTokenMCBalance)
    );
    const totalValueStakedInMCUsd = totalTokensStakedMC * stakeTokenPriceUsd;

    // Digichain pool info
    const digichainPoolAllocPoint = new BigNumber(
      digichainPoolInfo.allocPoint?._hex
    );
    const digichainPoolWeight = totalAllocPoint
      ? digichainPoolAllocPoint.div(new BigNumber(totalAllocPoint))
      : new BigNumber(0);
    const totalDigichainStakedMC = getBalanceNumber(
      new BigNumber(digichainPoolTotalStaked)
    );
    const totalDigichainValueStakedInMCUsd =
      totalDigichainStakedMC * rewardTokenPriceUsd;

    // Calculate APR
    const poolWeight = totalAllocPoint
      ? allocPoint.div(new BigNumber(totalAllocPoint))
      : new BigNumber(0);

    // This only works for apeswap farms
    const lpApr =
      farmLpAprs?.lpAprs?.find(
        (lp) => lp.pid === vaultConfig.masterchef.pid[chainId]
      )?.lpApr * 100;

    const oneThousandDollarsWorthOfToken = 1000 / rewardTokenPriceUsd;

    const apr = getFarmApr(
      poolWeight,
      new BigNumber(rewardTokenPriceUsd),
      new BigNumber(totalValueStakedInMCUsd)
    );
    const digichainPoolApr = getFarmApr(
      digichainPoolWeight,
      new BigNumber(rewardTokenPriceUsd),
      new BigNumber(totalDigichainValueStakedInMCUsd)
    );

    let yearlyApy = 0;
    let dailyApy = 0;

    if (vaultConfig.version === "V2") {
      yearlyApy = tokenEarnedPerThousandDollarsCompoundingMax({
        numberOfDays: 365,
        farmApr: lpApr ? apr + lpApr : apr,
        digichainPoolApr,
        performanceFee: keeperFee,
      });
      dailyApy = tokenEarnedPerThousandDollarsCompoundingMax({
        numberOfDays: 1,
        farmApr: lpApr ? apr + lpApr : apr,
        digichainPoolApr,
        performanceFee: keeperFee,
      });
    } else {
      const amountEarnedYealry = tokenEarnedPerThousandDollarsCompounding({
        numberOfDays: 365,
        farmApr: lpApr ? apr + lpApr : apr,
        tokenPrice: rewardTokenPriceUsd,
        performanceFee: keeperFee,
      });
      const amountEarnedDaily = tokenEarnedPerThousandDollarsCompounding({
        numberOfDays: 1,
        farmApr: lpApr ? apr + lpApr : apr,
        tokenPrice: rewardTokenPriceUsd,
        performanceFee: keeperFee,
      });
      yearlyApy = getRoi({
        amountEarned: amountEarnedYealry,
        amountInvested: oneThousandDollarsWorthOfToken,
      });
      dailyApy = getRoi({
        amountEarned: amountEarnedDaily,
        amountInvested: oneThousandDollarsWorthOfToken,
      });
    }

    return {
      ...vaultConfig,
      keeperFee: vaultConfig.version === "V2" ? keeperFee.toString() : "0.25",
      withdrawFee:
        vaultConfig.version === "V2"
          ? withdrawFee.toString()
          : vaultConfig?.fee
          ? vaultConfig.fee
          : "0",
      totalStaked: totalTokensStaked.toString(),
      totalAllocPoint: totalAllocPoint.toString(),
      allocPoint: allocPoint.toString(),
      weight: parseInt(weight.toString()),
      strategyPairBalance: strategyPairBalance.toString(),
      strategyPairBalanceFixed: null,
      stakeTokenPrice: stakeTokenPriceUsd,
      rewardTokenPrice: rewardTokenPriceUsd,
      masterChefPairBalance: stakeTokenMCBalance.toString(),
      apy: {
        daily: dailyApy,
        yearly: yearlyApy,
      },
    };
  });
  return data;
};

export default cleanVaultData;
