import BigNumber from "bignumber.js";
import { PoolConfig, Token } from "config/constants/types";
import { Pool, TokenPrices } from "state/types";
import { getPoolApr } from "utils/apr";
import { getBalanceNumber } from "utils/formatBalance";

const cleanPoolData = (
  poolIds: number[],
  chunkedPools: any[],
  tokenPrices: TokenPrices[],
  chainId: number,
  poolsConfig: Pool[]
) => {
  const data = chunkedPools.map((chunk, index) => {
    const poolConfig: PoolConfig = poolsConfig.find(
      (pool) => pool.sousId === poolIds[index]
    );
    const [startBlock, endBlock, totalStaked] = chunk;
    const totalStakedFormatted = new BigNumber(totalStaked).toJSON();
    const [stakingToken, rewardToken, apr] = fetchPoolTokenStatsAndApr(
      poolConfig,
      tokenPrices,
      totalStakedFormatted,
      chainId
    );
    return {
      sousId: poolIds[index],
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: poolConfig?.bonusEndBlock || new BigNumber(endBlock).toJSON(),
      totalStaked: totalStakedFormatted,
      stakingToken: { ...poolConfig?.stakingToken, ...stakingToken },
      rewardToken: { ...poolConfig?.rewardToken, ...rewardToken },
      apr,
    };
  });
  return data;
};

const fetchPoolTokenStatsAndApr = (
  pool: PoolConfig,
  tokenPrices: TokenPrices[],
  totalStaked,
  chainId: number
): [Token, Token, number] => {
  // Get values needed to calculate apr
  const curPool = pool;
  const rewardToken = tokenPrices
    ? tokenPrices.find(
        (token) =>
          pool?.rewardToken &&
          token?.address?.[chainId] === pool?.rewardToken?.address?.[chainId]
      )
    : pool?.rewardToken;
  const stakingToken = tokenPrices
    ? tokenPrices.find(
        (token) =>
          token?.address?.[chainId] === pool?.stakingToken?.address?.[chainId]
      )
    : pool?.stakingToken;
  // Calculate apr
  const apr = getPoolApr(
    stakingToken?.price,
    rewardToken?.price,
    getBalanceNumber(totalStaked),
    curPool?.tokenPerBlock
  );
  return [stakingToken, rewardToken, apr];
};

export default cleanPoolData;
