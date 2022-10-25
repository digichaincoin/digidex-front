import { useCallback } from "react";
import { useVaultDigiV1, useVaultDigiV2 } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import {
  vaultUnstakeV1,
  vaultUnstakeV2,
  vaultUnstakeAll,
} from "utils/callHelpers";
import track from "utils/track";

export const useVaultUnstake = (pid: number, version: "V1" | "V2") => {
  const { chainId } = useActiveWeb3React();
  const vaultDigiContractV1 = useVaultDigiV1();
  const vaultDigiContractV2 = useVaultDigiV2();

  const handleUnstake = useCallback(
    async (amount: string) => {
      try {
        const trxHash =
          version === "V1"
            ? await vaultUnstakeV1(vaultDigiContractV1, pid, amount)
            : await vaultUnstakeV2(vaultDigiContractV2, pid, amount);
        track({
          event: "vault",
          chain: chainId,
          data: {
            cat: "unstake",
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
    [vaultDigiContractV1, pid, version, vaultDigiContractV2, chainId]
  );
  return { onUnstake: handleUnstake };
};

export const useVaultUnstakeAll = (pid: number) => {
  const { chainId } = useActiveWeb3React();
  const vaultDigiContractV1 = useVaultDigiV1();

  const handleUnstake = useCallback(
    async (amount: string) => {
      const trxHash = await vaultUnstakeAll(vaultDigiContractV1, pid);
      track({
        event: "vault",
        chain: chainId,
        data: {
          cat: "unstakeAll",
          amount,
          pid,
        },
      });
      console.info(trxHash);
      return trxHash;
    },
    [vaultDigiContractV1, chainId, pid]
  );

  return { onUnstakeAll: handleUnstake };
};
