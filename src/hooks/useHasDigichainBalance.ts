import { useDigichainAddress } from "./useAddress";
import useTokenBalance from "./useTokenBalance";

/**
 * A hook to check if a wallet's DIGICHAIN balance is at least the amount passed in
 */
const useHasDigichainBalance = (minimumBalance) => {
  const digichainBalance = useTokenBalance(useDigichainAddress());
  return digichainBalance.gte(minimumBalance);
};

export default useHasDigichainBalance;
