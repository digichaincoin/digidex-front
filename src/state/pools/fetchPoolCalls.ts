import { PoolConfig } from "config/constants/types";
import { Call } from "utils/multicall";

const fetchPoolCalls = (pool: PoolConfig, chainId: number): Call[] => {
  const standardCalls = [
    {
      address: pool.contractAddress[chainId],
      name: "startBlock",
    },
    // Get end block
    {
      address: pool.contractAddress[chainId],
      name: "bonusEndBlock",
    },
  ];
  const digichainCall = {
    address: pool.stakingToken.address[chainId],
    name: "balanceOf",
    params: [pool.contractAddress[chainId]],
  };
  const gdigiCall = {
    address: pool.contractAddress[chainId],
    name: "totalStaked",
  };
  // Digichain earn digichain pool will break on start / end block calls
  if (pool.sousId === 0) {
    return [digichainCall];
  }
  return [
    ...standardCalls,
    pool.reflect || pool.stakingToken.symbol === "GDIGI"
      ? gdigiCall
      : digichainCall,
  ];
};

export default fetchPoolCalls;
