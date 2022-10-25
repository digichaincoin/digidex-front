import { useMemo } from "react";
import { AutonomyLimitStopOrders } from "@autonomylabs/limit-stop-orders";
import useActiveWeb3React from "./useActiveWeb3React";

export default function useAutonomyOrdersLib():
  | AutonomyLimitStopOrders
  | undefined {
  const { chainId, library } = useActiveWeb3React();

  return useMemo(() => {
    try {
      return chainId && library
        ? new AutonomyLimitStopOrders(
            chainId,
            library?.getSigner(),
            "0x60f40fA375BB1BD1293D1929f24C92c243473105",
            "0x6126e30dE58A77De3d7649E06a76635EfBeF2FfC"
          )
        : undefined;
    } catch (error: any) {
      console.error(
        `Could not instantiate AutonomyLimitStopOrders: ${error.message}`
      );
      return undefined;
    }
  }, [chainId, library]);
}
