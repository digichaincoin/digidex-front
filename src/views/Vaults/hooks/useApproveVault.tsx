import { useCallback } from "react";
import { ethers } from "ethers";
import { useERC20 } from "hooks/useContract";
import { useVaultDigiAddressV1, useVaultDigiAddressV2 } from "hooks/useAddress";

// Approve a vault
const useApproveVault = (stakeTokenAddress: string, version: "V1" | "V2") => {
  const vaultApeAddressV1 = useVaultDigiAddressV1();
  const vaultApeAddressV2 = useVaultDigiAddressV2();
  const tokenContract = useERC20(stakeTokenAddress);
  const handleApprove = useCallback(async () => {
    const tx = await tokenContract
      .approve(
        version === "V1" ? vaultApeAddressV1 : vaultApeAddressV2,
        ethers.constants.MaxUint256
      )
      .then((trx) => trx.wait());
    return tx;
  }, [vaultApeAddressV1, version, vaultApeAddressV2, tokenContract]);
  return { onApprove: handleApprove };
};

export default useApproveVault;
