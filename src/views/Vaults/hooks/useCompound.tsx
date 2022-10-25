import { useCallback } from "react";
import { useVaultDigiV2 } from "hooks/useContract";

const useCompound = () => {
  const vaultDigiContractV2 = useVaultDigiV2();

  const handleCompound = useCallback(async () => {
    try {
      const txHash = await vaultDigiContractV2
        .earnAll()
        .then((trx) => trx.wait());
      return txHash;
    } catch (e) {
      console.error(e);
    }
    return null;
  }, [vaultDigiContractV2]);

  return { onCompound: handleCompound };
};

export default useCompound;
