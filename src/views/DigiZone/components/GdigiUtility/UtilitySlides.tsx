import UtilitySlide from "./UtilitySlide";
import React from "react";

export const utilitySlides = [
  <UtilitySlide
    key={0}
    action="HOLD"
    icon="passive-farming"
    title="Passive Farming"
    detail="Collect a 2% reflect fee on all GDIGI transactions"
  />,
  <UtilitySlide
    key={1}
    action="VOTE"
    icon="governance"
    title="DAO Governance"
    detail="Vote on all protocol decisions"
    href="https://discuss.digidex.finance/"
  />,
  <UtilitySlide
    key={2}
    action="STAKE"
    icon="exclusive-pools"
    title="Exclusive Pools"
    detail="Access unique partner pools with higher APRs"
    href="https://digidex.finance/pools"
  />,
  <UtilitySlide
    key={3}
    action="COMMIT"
    icon="exclusive-offerings"
    title="Exclusive Offerings"
    detail="Access secondary IAO offerings for higher token allocations"
    href="https://digidex.finance/iao"
  />,
];
