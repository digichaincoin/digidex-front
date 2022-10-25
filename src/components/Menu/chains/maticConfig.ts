import { MenuEntry } from "@digi.swap/uikit";
import { ChainId } from "@digi.swap/sdk";
import { NETWORK_INFO_LINK } from "config/constants/chains";
import { ContextApi } from "../../../contexts/Localization/types";

const maticConfig: (t: ContextApi["t"]) => MenuEntry[] = (t) => [
  // {
  //   label: t("Exchange"),
  //   lightIcon: "ExchangeLightImage",
  //   darkIcon: "ExchangeDarkImage",
  //   items: [
  //     {
  //       label: t("Swap"),
  //       href: "/swap",
  //       isNew: false,
  //     },
  //     {
  //       label: t("Liquidity"),
  //       href: "/zap",
  //       isNew: false,
  //     },
  //     {
  //       label: t("Pro Trading"),
  //       href: "https://pro.digidex.finance",
  //       isNew: false,
  //     },
  //   ],
  // },
  // {
  //   label: t("Farms"),
  //   href: "/digichain-farms",
  //   isNew: false,
  // },
  // {
  //   label: t("Bills"),
  //   href: "/treasury-bills",
  //   isNew: true,
  // },
  // {
  //   label: t("Explore"),
  //   lightIcon: "MoreLightImage",
  //   darkIcon: "MoreDarkImage",
  //   items: [
  //     {
  //       label: t("ApeStats"),
  //       href: "/apestats",
  //       isNew: false,
  //     },
  //     {
  //       label: t("Dashboard"),
  //       href: "protocol-dashboard",
  //       isNew: true,
  //     },
  //     {
  //       label: t("Documentation"),
  //       href: "https://digichain.gitbook.io/digidex-finance/",
  //       isNew: false,
  //     },
  //     {
  //       label: t("Charts"),
  //       href: NETWORK_INFO_LINK[ChainId.MATIC],
  //       isNew: false,
  //     },
  //     {
  //       label: t("Governance"),
  //       href: "https://discuss.digidex.finance",
  //       isNew: false,
  //     },
  //     {
  //       label: t("Newsletter"),
  //       href: "?modal=newsletter",
  //       isNew: true,
  //     },
  //   ],
  // },
];

export default maticConfig;
