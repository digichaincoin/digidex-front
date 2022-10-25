import digiPriceGetterABI from "config/abi/digiPriceGetter.json";
import erc20ABI from "config/abi/erc20.json";
import { Token } from "config/constants/types";
import multicall from "utils/multicall";
import { getDigiPriceGetterAddress } from "utils/addressHelper";
import { getBalanceNumber } from "utils/formatBalance";

const fetchPrices = async (chainId, tokens: Token[]) => {
  const digiPriceGetterAddress = getDigiPriceGetterAddress(chainId);
  const tokensToCall = Object.fromEntries(
    Object.entries(tokens).filter(([, values]) => values.address[chainId])
  );
  const erc20Calls = Object.values(tokensToCall).map((token) => {
    return {
      address: token.address[chainId],
      name: "decimals",
    };
  });
  const tokenDecimals = await multicall(chainId, erc20ABI, erc20Calls);
  const calls = Object.values(tokensToCall).map((token, i) => {
    if (token.lpToken) {
      return {
        address: digiPriceGetterAddress,
        name: "getLPPrice",
        params: [token.address[chainId], tokenDecimals[i][0]],
      };
    }
    return {
      address: digiPriceGetterAddress,
      name: "getPrice",
      params: [token.address[chainId], tokenDecimals[i][0]],
    };
  });
  const tokenPrices = await multicall(chainId, digiPriceGetterABI, calls);

  // Digichain should always be the first token
  const mappedTokenPrices = Object.values(tokensToCall).map((token, i) => {
    return {
      symbol: token.symbol,
      address: token.address,
      price:
        token.symbol === "GDIGI"
          ? getBalanceNumber(tokenPrices[0], tokenDecimals[i][0]) * 1.389
          : getBalanceNumber(tokenPrices[i], tokenDecimals[i][0]),
      decimals: tokenDecimals[i][0],
    };
  });
  return mappedTokenPrices;
};

export default fetchPrices;
