import { CurrencyAmount, Pair, Percent, TokenAmount } from "@digi.swap/sdk";

export interface RemoveLiquidityModalProps {
  pair: Pair;
  title: string;
  txHash: string;
  attemptingTxn: boolean;
  parsedAmounts: {
    LIQUIDITY_PERCENT: Percent;
    LIQUIDITY?: TokenAmount;
    CURRENCY_A?: CurrencyAmount;
    CURRENCY_B?: CurrencyAmount;
  };
  onDismiss: () => void;
  onRemove: () => void;
}
