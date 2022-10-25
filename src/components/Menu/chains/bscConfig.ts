import { MenuEntry } from "@digi.swap/uikit";
import { ChainId } from "@digi.swap/sdk";
import { ContextApi } from "contexts/Localization/types";
import { NETWORK_INFO_LINK } from "config/constants/chains";

const bscConfig: (t: ContextApi["t"]) => MenuEntry[] = (t) => [
  {
    label: t("Exchange"),
    lightIcon: "OfferingsDarkImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      {
        label: t("Swap"),
        href: "/swap",
        isNew: false,
      },
      {
        label: t("Orders"),
        href: "/limit-orders",
        isNew: false,
      },
      {
        label: t("Liquidity"),
        href: "/zap",
        isNew: false,
      },
      {
        label: t("Perpetual Trading"),
        href: "https://per.digidex.finance",
        isNew: false,
      },
      // {
      //   label: t("GDIGI"),
      //   href: "/gdigi",
      //   isNew: false,
      // },
    ],
  },
  {
    label: t("Digi Farm"),
    lightIcon: "OfferingsDarkImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      // {
      //   label: t("Staking Pools"),
      //   href: "/pools",
      //   isNew: false,
      // },
      {
        label: t("DIGICHAIN Boost"),
        href: "/maximizers",
        isNew: false,
      },
      {
        label: t("DIGICHAIN Farms"),
        href: "/digichain-farms",
        isNew: false,
      },
      {
        label: t("Jungle Farms"),
        href: "/jungle-farms",
        isNew: false,
      },
    ],
  },
  {
    label: t("DigiStaking"),
    lightIcon: "OfferingsLightImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      {
        label: t("Digichain Staking"),
        href: "/pools",
        isNew: false,
      },
      {
        label: t("Staking Pools"),
        href: "https://d18.digidex.finance",
        isNew: false,
      },
      // {
      //   label: t("Staking D9 No Partner"),
      //   href: "https://d9.digidex.finance",
      //   isNew: false,
      // },
    ],
  },
  // {
  //   label: t("Collect"),
  //   lightIcon: "NfaLightImage",
  //   darkIcon: "NfaDarkImage",
  //   items: [
  //     {
  //       label: t("NFA Collection"),
  //       href: "/nft",
  //       isNew: false,
  //     },
  //     {
  //       label: t("NFA Auction"),
  //       href: "/auction",
  //       isNew: false,
  //     },
  //     {
  //       label: t("NFA Staking"),
  //       href: "/staking",
  //       isNew: false,
  //     },
  //     {
  //       label: t("NFA Liquidity"),
  //       href: "https://liquidcollectibles.io/collection/0x6afc012783e3a6ef8c5f05f8eee2edef6a052ec4",
  //       isNew: false,
  //     },
  //     {
  //       label: t("NFB Collection"),
  //       href: "https://nftkey.app/collections/nfbs/",
  //       isNew: false,
  //     },
  //     {
  //       label: t("NFB Liquidity"),
  //       href: "https://liquidcollectibles.io/collection/0x9f707a412302a3ad64028a9f73f354725c992081",
  //       isNew: false,
  //     },
  //   ],
  // },
  {
    label: t("Offical Website"),
    href: "https://digichaincoin.com",
    isNew: false,
  },
  {
    label: t("Explore More"),
    lightIcon: "OfferingsDarkImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      // {
      //   label: t("DigiDexStats"),
      //   href: "/digistats",
      //   isNew: false,
      // },
      // {
      //   label: t("Dashboard"),
      //   href: "protocol-dashboard",
      //   isNew: true,
      // },
      {
        label: t("Documentation"),
        href: "https://digichain.gitbook.io/",
        isNew: false,
      },
      {
        label: t("Charts"),
        href: NETWORK_INFO_LINK[ChainId.BSC],
        isNew: false,
      },
      // {
      //   label: t("Governance"),
      //   href: "https://discuss.digidex.finance",
      //   isNew: false,
      // },
      // {
      //   label: t("Newsletter"),
      //   href: "?modal=newsletter",
      //   isNew: true,
      // },
    ],
  },
];

export default bscConfig;
