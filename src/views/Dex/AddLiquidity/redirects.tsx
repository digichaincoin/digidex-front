import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import AddLiquidity from "./index";

export function RedirectToAddLiquidity() {
  return <Redirect to="/add-liquidity/" />;
}

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|BNB)-(0x[a-fA-F0-9]{40}|BNB)$/;
export function RedirectOldAddLiquidityPathStructure(
  props: RouteComponentProps<{ currencyIdA: string }>
) {
  const {
    match: {
      params: { currencyIdA },
    },
  } = props;
  const match = currencyIdA.match(OLD_PATH_STRUCTURE);
  if (match?.length) {
    return <Redirect to={`/add-liquidity/${match[1]}/${match[2]}`} />;
  }

  return <AddLiquidity {...props} />;
}

export function RedirectDuplicateTokenIds(
  props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>
) {
  const {
    match: {
      params: { currencyIdA, currencyIdB },
    },
  } = props;
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/add-liquidity/${currencyIdA}`} />;
  }
  return <AddLiquidity {...props} />;
}