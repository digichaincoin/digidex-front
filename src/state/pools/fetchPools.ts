import sousChefABI from "config/abi/sousChef.json";
import digichainABI from "config/abi/digichain.json";
import { Pool, TokenPrices } from "state/types";
import { chunk } from "lodash";
import multicall from "utils/multicall";
import fetchPoolCalls from "./fetchPoolCalls";
import cleanPoolData from "./cleanPoolData";

const fetchPools = async (
  chainId: number,
  tokenPrices: TokenPrices[],
  poolsConfig: Pool[]
) => {
  const poolIds = [];
  const poolCalls = poolsConfig.flatMap((pool) => {
    poolIds.push(pool.sousId);
    return fetchPoolCalls(pool, chainId);
  });
  // We do not want the block time for the digichain earn digichain pool so we append two null values to keep the chunks even
  const vals = await multicall(
    chainId,
    [...sousChefABI, ...digichainABI],
    poolCalls
  );
  const formattedVals = [null, null, ...vals];
  const chunkSize = formattedVals.length / poolsConfig.length;
  const chunkedPools = chunk(formattedVals, chunkSize);

  return cleanPoolData(
    poolIds,
    chunkedPools,
    tokenPrices,
    chainId,
    poolsConfig
  );
};

export default fetchPools;
