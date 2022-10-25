import { PageMeta } from "./types";

export const DEFAULT_META: PageMeta = {
  title: "DigiDex : Smartdex System",
  description:
    "DigiDex is a DeFi Hub on BNB Chain, Polygon, & Ethereum. Swap, stake, and lend cryptocurrencies, from stablecoins to altcoins - all in one place.",
  image: "https://digidex.finance/logodigidex.png",
};

export const customMeta: { [key: string]: PageMeta } = {
  "/": {
    title: "DigiDex | DigiDex: Smartdex System",
    description:
      "Digidex is a DeFi Hub on BNB Chain, Polygon, & Ethereum. Swap, stake, and lend cryptocurrencies, from stablecoins to altcoins - all in one place.",
  },
  "/swap": {
    title: "Swap | DigiDex: Smartdex System",
    description:
      "Swap between hundreds of crypto tokens using our decentralized exchange.",
  },
  "/digistats": {
    title: "digistats | DigiDex: Smartdex System",
    description: "Track your portfolio on DigiDex using our custom dashboard.",
  },
  "/nft": {
    title: "Non Fungible Digis | DigiDex: Smartdex System",
    description: "Buy and sell DigiDex NFTs and join our NFT community.",
  },
  "/digichain-farms": {
    title: "DIGICHAIN Farms | DigiDex: Smartdex System",
    description:
      "Stake your liquidity provider (LP) tokens in DIGICHAIN Farms to earn DIGICHAIN.",
  },
  "/jungle-farms": {
    title: "Jungle Farms | DigiDex: Smartdex System",
    description:
      "Stake your liquidity provider (LP) tokens to earn partner project tokens.",
  },
  "/pools": {
    title: "Staking Pools | DigiDex: Smartdex System",
    description:
      "Stake DIGICHAIN in Staking Pools to earn partner project tokens.",
  },
  "/liquidity": {
    title: "Liquidity | DigiDex: Smartdex System",
    description:
      "Add liquidity to the DigiDex decentralized exchange to create LPs and earn trading fees.",
  },
  "/add-liquidity": {
    title: "Liquidity | DigiDex: Smartdex System",
    description:
      "Add liquidity to the DigiDex decentralized exchange to create LPs and earn trading fees.",
  },
  "/iao": {
    title: "Initial Digi Offerings | DigiDex: Smartdex System",
    description:
      "Launch your crypto project with DigiDex, or commit into Initial Digi Offerings.",
  },
  "/gdigi": {
    title: "GDIGI | DigiDex: Smartdex System",
    description:
      "Convert your DIGICHAIN to GDIGI to gain exclusive access to governance, pools, and more.",
  },
  "/maximizers": {
    title: "DIGICHAIN Maximizers BOOST | DigiDex: Smartdex System",
    description:
      "Stake your liquidity provider (LP) tokens in auto-compounding vaults to earn DIGICHAIN.",
  },
  "/auction": {
    title: "Auction | DigiDex: Smartdex System",
  },
  "/staking": {
    title: "NFA Staking | DigiDex: Smartdex System",
  },
  "/treasury-bills": {
    title: "Treasury Bills | DigiDex: Smartdex System",
    description:
      "Get DIGICHAIN and partner project tokens at a discount using your liquidity provider (LP) tokens.",
  },
  "/limit-orders": {
    title: "Limit Orders | DigiDex: Smartdex System",
    description:
      "Trade crypto tokens at the price you want using limit orders on the DigiDex DEX.",
  },
};
