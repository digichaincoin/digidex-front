import React from "react";
import {
  Tag,
  VerifiedIcon,
  CommunityIcon,
  BinanceIcon,
} from "@digidexfinance/uikit";
import { useTranslation } from "contexts/Localization";

const CoreTag = () => {
  const { t } = useTranslation();
  return (
    <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
      {t("Core")}
    </Tag>
  );
};

const DigiZone = () => {
  const { t } = useTranslation();
  return (
    <Tag variant="primary" outline startIcon={<CommunityIcon />}>
      {t("DigiZone")}
    </Tag>
  );
};

const CommunityTag = () => {
  const { t } = useTranslation();
  return (
    <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
      {t("Community")}
    </Tag>
  );
};

const BinanceTag = () => {
  const { t } = useTranslation();
  return (
    <Tag variant="binance" outline startIcon={<BinanceIcon />}>
      {t("Binance")}
    </Tag>
  );
};

const DualTag = (props) => {
  const { t } = useTranslation();
  return (
    <Tag variant="textSubtle" outline {...props}>
      {t("Dual")}
    </Tag>
  );
};

export { CoreTag, CommunityTag, BinanceTag, DigiZone, DualTag };
