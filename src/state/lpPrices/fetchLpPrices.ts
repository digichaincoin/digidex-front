import digichainPriceGetterABI from "config/abi/digichainPriceGetter.json";
import multicall from "utils/multicall";
import { getDigichainPriceGetterAddress } from "utils/addressHelper";
import { getBalanceNumber } from "utils/formatBalance";
import { Farm } from "state/types";

const fetchLpPrices = async (chainId, farmsConfig: Farm[]) => {
  const digichainPriceGetterAddress = getDigichainPriceGetterAddress(chainId);
  const tokensToCall = Object.keys(farmsConfig).filter(
    (token) => farmsConfig[token].lpAddresses[chainId] !== undefined
  );
  const calls = tokensToCall.map((token) => {
    return {
      address: digichainPriceGetterAddress,
      name: "getLPPrice",
      params: [farmsConfig[token].lpAddresses[chainId], 18],
    };
  });
  const tokenPrices = await multicall(chainId, digichainPriceGetterABI, calls);
  // Digichain should always be the first token
  const mappedTokenPrices = tokensToCall.map((token, i) => {
    return {
      symbol: farmsConfig[token].lpSymbol,
      address: farmsConfig[token].lpAddresses,
      price: getBalanceNumber(tokenPrices[i], 18),
      decimals: 18,
      pid: farmsConfig[token].pid,
    };
  });
  return mappedTokenPrices;
};

export default fetchLpPrices;
