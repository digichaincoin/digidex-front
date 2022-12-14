import nfaStakingPoolsAbi from "config/abi/nfaStaking.json";
import nfaAbi from "config/abi/nonFungibleDigis.json";
import { getNonFungibleDigisAddress } from "utils/addressHelper";
import multicall from "utils/multicall";
import BigNumber from "bignumber.js";
import { NfaStakingPoolConfig } from "config/constants/types";

export const fetchPoolsAllowance = async (
  chainId,
  account,
  nfaStakingPools: NfaStakingPoolConfig[]
) => {
  const nfaAddress = getNonFungibleDigisAddress(chainId);
  const calls = nfaStakingPools.map((p) => ({
    address: nfaAddress,
    name: "isApprovedForAll",
    params: [account, p.contractAddress[chainId]],
  }));

  const allowances = await multicall(chainId, nfaAbi, calls);
  return nfaStakingPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: allowances[index][0] }),
    {}
  );
};

export const fetchUserBalances = async (
  chainId,
  account,
  nfaStakingPools: NfaStakingPoolConfig[]
) => {
  const nfaAddress = getNonFungibleDigisAddress(chainId);
  const calls = nfaStakingPools.map(() => ({
    address: nfaAddress,
    name: "balanceOf",
    params: [account],
  }));
  const tokenBalancesRaw = await multicall(chainId, nfaAbi, calls);
  const tokenBalances = nfaStakingPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON(),
    }),
    {}
  );
  return { ...tokenBalances };
};

export const fetchUserStakeBalances = async (
  chainId,
  account,
  nfaStakingPools: NfaStakingPoolConfig[]
) => {
  const calls = nfaStakingPools.map((p) => ({
    address: p.contractAddress[chainId],
    name: "userInfo",
    params: [account],
  }));
  const userInfo = await multicall(chainId, nfaStakingPoolsAbi, calls);
  const stakedBalances = nfaStakingPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {}
  );

  return { ...stakedBalances };
};

export const fetchUserPendingRewards = async (
  chainId,
  account,
  nfaStakingPools: NfaStakingPoolConfig[]
) => {
  const calls = nfaStakingPools.map((p) => ({
    address: p.contractAddress[chainId],
    name: "pendingReward",
    params: [account],
  }));
  const res = await multicall(chainId, nfaStakingPoolsAbi, calls);
  const pendingRewards = nfaStakingPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {}
  );

  return { ...pendingRewards };
};

export const fetchUserStakedNfas = async (
  chainId,
  account,
  nfaStakingPools: NfaStakingPoolConfig[]
) => {
  const calls = nfaStakingPools.map((p) => ({
    address: p.contractAddress[chainId],
    name: "stakedNfts",
    params: [account],
  }));
  const res = await multicall(chainId, nfaStakingPoolsAbi, calls);
  const stakedNfas = nfaStakingPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: res[index][0]?.map((item) => {
        return item.toNumber();
      }),
    }),
    {}
  );

  return { ...stakedNfas };
};
