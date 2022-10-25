import { ChainId } from "@digi.swap/sdk";
import { MenuEntry } from "@digidexfinance/uikit";
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
  //       href: "/add-liquidity",
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
  //     },
  //     {
  //       label: t("Charts"),
  //       href: NETWORK_INFO_LINK[ChainId.MAINNET],
  //     },
  //     {
  //       label: t("Governance"),
  //       href: "https://discuss.digidex.finance",
  //     },
  //     {
  //       label: t("Newsletter"),
  //       href: "?modal=newsletter",
  //       isNew: true,
  //     },
  //   ],
  // },
  //   {
  //     label: t('Pools'),
  //     icon: 'PoolIcon',
  //     href: '/pools',
  //   },
  //   {
  //     label: t('IAO'),
  //     icon: 'IfoIcon',
  //     href: '/iao',
  //   },
  //   {
  //     label: t('GDIGI'),
  //     icon: 'DigiZone',
  //     href: '/gdigi',
  //   },
];

export default maticConfig;
