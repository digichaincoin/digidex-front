import { useCallback } from "react";
import { useVaultDigiV1, useVaultDigiV2 } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { stakeVaultV1, stakeVaultV2 } from "utils/callHelpers";
import track from "utils/track";

export const useVaultStake = (pid: number, version: "V1" | "V2") => {
  const { chainId } = useActiveWeb3React();
  const vaultDigiContractV1 = useVaultDigiV1();
  const vaultDigiContractV2 = useVaultDigiV2();

  const handleStake = useCallback(
    async (amount: string) => {
      try {
        const trxHash =
          version === "V1"
            ? await stakeVaultV1(vaultDigiContractV1, pid, amount)
            : await stakeVaultV2(vaultDigiContractV2, pid, amount);
        track({
          event: "vault",
          chain: chainId,
          data: {
            cat: "stake",
            amount,
            pid,
          },
        });
        console.info(trxHash);
        return trxHash;
      } catch (e) {
        console.error(e);
      }
      return null;
    },
    [vaultDigiContractV1, vaultDigiContractV2, version, pid, chainId]
  );

  return { onStake: handleStake };
};
