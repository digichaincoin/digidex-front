import { Ifo } from "./types";
import { ContextApi } from "../../contexts/Localization/types";

// Used for configuring BNB IAOs

const ifos: (t: ContextApi["t"]) => Ifo[] = (t) => [
  {
    id: "chirpley",
    address: "0x93D678a48176296D176a6C660e127c7eF4815db8",
    isActive: true,
    isLinear: true,
    name: t("Chirpley"),
    subTitle: t(
      "The first fully automated, peer-to-peer influencer marketplace"
    ),
    description: t(
      "Chirpley is a decentralized web 3.0 ecosystem that instantly automates influencer marketing campaigns by connecting brands with nano- and micro-influencers using artificial intelligence, machine learning, and blockchain technology. Chirpley’s platform speeds up matchmaking, dealmaking, price setting and campaign launching - changing the game for both brands and influencers."
    ),
    launchDate: "September 6th",
    launchTime: "23:30 UTC",
    saleAmount: "9,523,809.5 CHRP",
    raiseAmount: "$200,000",
    vestingTime: "6 Months",
    projectSiteUrl: "https://chirpley.ai/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "CHRP",
    tokenDecimals: 18,
    releaseBlockNumber: 21108461, // block to start showing contract details
    vesting: true,
  },
  {
    id: "animalconcerts",
    address: "0x4bcfC7571D650e707e9C6506e1ED0E3e434E9bb4", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: true,
    name: t("Animal Concerts"),
    subTitle: t("The Next Generation of Live Events in the Metaverse"),
    description: t(
      "Animal Concerts is streaming interactive metaverse concerts, enabling both established and emerging artists to deliver amazing next-generation fan experiences. The protocol welcomes a new paradigm for music distribution, working closely with artists to design and mint unique NFTs to personalize and enhance the fan experience while generating new and direct revenue for the artists involved."
    ),
    launchDate: "March 29th",
    launchTime: "2:00 UTC",
    saleAmount: "111,111,111 ANML",
    raiseAmount: "$500,000",
    vestingTime: "6 Months",
    projectSiteUrl: "https://animalconcerts.com/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "ANML",
    tokenDecimals: 18,
    releaseBlockNumber: 16465651, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "trustnft",
    address: "0x8F87424743074290a4682231B9e671C4b1c120a6", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: true,
    name: t("TrustNFT"),
    subTitle: t("Decentralized NFT Loans & Marketplace"),
    description: t(
      `TrustNFT is using AI and big data to accurately evaluate NFTs and unlock their potential for use as loan collateral. Users can combine DeFi with NFTs to earn yield on selected NFT-backed loans. The project addresses major problems in the NFT ecosystem, including low liquidity, investment risk, and the monetization of assets.`
    ),
    launchDate: "February 3rd",
    launchTime: "1:00 UTC",
    saleAmount: "30,000,000 TRUSTNFT",
    raiseAmount: "$525,000",
    vestingTime: "3 Months",
    projectSiteUrl: "https://trustnft.org/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "TRUSTNFT",
    tokenDecimals: 18,
    releaseBlockNumber: 14911408, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "stz",
    address: "0xa526477bBf22643bE96D02Ebf3934BA1721059f3", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: t("99Starz"),
    subTitle: t(`The World's Largest NFT Yield Ecosystem`),
    description: t(
      `99Starz is creating a results-driven, cross-chain GameFi ecosystem that will allow game studios, gamers, and collectors to participate and win in different ways together. Through their unique GameFi guild model and NFT leasing marketplace, 99Starz will cater to all aspects of the most popular blockchain gaming economies, including Axie Infinity, F1 Delta, and Sorare.`
    ),
    launchDate: "December 11th",
    launchTime: "5:00 UTC",
    saleAmount: "500,000 STZ",
    raiseAmount: "$250,000",
    vestingTime: "3 Months",
    projectSiteUrl: "https://99starz.io/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "STZ",
    tokenDecimals: 18,
    releaseBlockNumber: 22364007, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "gan",
    address: "0xdDb35EE8d3B54216B114190a1Bc14eB11408BE23", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: t("Galactic Arena"),
    subTitle: t("A Play-to-Earn NFT Battleground"),
    description: t(
      `Galactic Arena is creating a democratized NFT gaming battlefield! It doesn't matter where your NFT comes from, in this NFTverse, you can bring your favorite heroes with you! Make wagers on PvP battles in real time to top the leaderboard and earn prizes that include BNB, BUSD, and GAN!`
    ),
    launchDate: "November 4th",
    launchTime: "16:00 UTC",
    saleAmount: "80,000,000 GAN",
    raiseAmount: "$400,000",
    vestingTime: "3 Months",
    projectSiteUrl: "http://galacticarena.io/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "GAN",
    tokenDecimals: 18,
    releaseBlockNumber: 12364007, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "nfty",
    address: "0xc55114204b5fA30b34c360De0E938eB3B3d4c0f6", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: t("NFTY Network"),
    subTitle: t("An NFT Gating Ecosystem"),
    description: t(
      `NFTY Network is building a decentralized NFT ecosystem built to facilitate Access-to-Earn, powering digital asset ownership rewards. Their goal is to unlock the true potential of NFTs through gated experiences that connect Web2 and Web3 infrastructures.`
    ),
    launchDate: "September 29th",
    launchTime: "17:00 UTC",
    saleAmount: "57,200,000 NFTY",
    raiseAmount: "$715,000",
    vestingTime: "3 Months",
    projectSiteUrl: "https://nftynetwork.io/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "NFTY",
    tokenDecimals: 18,
    releaseBlockNumber: 11342539, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "dragonary",
    address: "0x9BC1bC6C4010A2b0384C59b9513d841AA8b5BDF4", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: t("Dragonary"),
    subTitle: t("Hatch Your Destiny"),
    description: t(
      `CoinaryTV is developing a brand new game called Dragonary for Desktop, iPhone, and Android, where users can play to earn in-game currency. Users will be able to collect, trade, and breed various dragon NFTs and battle against the game or other players to win!`
    ),
    launchDate: "August 7th",
    launchTime: "16:00 UTC",
    saleAmount: "60,000,000 CYT",
    raiseAmount: "$600,000",
    vestingTime: "3 Months",
    projectSiteUrl: "https://dragonary.com/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "CYT",
    tokenDecimals: 18,
    releaseBlockNumber: 9828870, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: "bishares",
    address: "0x5B31A7124A4Abf8CA9B4090532A669783d8E11eE", // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: t("BiShares"),
    subTitle: t("Decentralized Index Funds"),
    description: t(
      `BiShares is creating BNB Chain’s first index fund for safely diversifying across multiple crypto assets. Use BNB to purchase a wide basket of assets and gain exposure to the broader crypto market and never miss out on a moon again.`
    ),
    launchDate: "July 9th",
    launchTime: "03:00 UTC",
    saleAmount: "128571 BISON",
    raiseAmount: "$450,000",
    totalAmountRaised: "$3,332,641",
    projectSiteUrl: "https://bishares.finance/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "BISON",
    tokenDecimals: 18,
    releaseBlockNumber: 8993971, // block to start showing contract details
    // burnedTxUrl: '',
  },
  {
    id: "hifi",
    // address: '0xF9F1B0945A31FB2Ea429014e58fCA47dAEee4743', // Leave empty for "Coming Soon!"
    address: "0x4D5e1E722e9280d44C564ef3FC14E0B03a50ad47", // IAO Aux contract!"
    isActive: false,
    isLinear: false,
    name: t("Hifi"),
    subTitle: t("Decentralized Retro Gaming"),
    description: t(
      "HiFi is developing a decentralized retro gaming ecosystem driven by its community. It uses staking and play-to-earn rewards to create a completely new DeFi gaming experience."
    ),
    launchDate: "June 11",
    launchTime: "03:00 UTC",
    saleAmount: "120,000,000 HIFI",
    raiseAmount: "$600,000",
    totalAmountRaised: "$24,428,059",
    projectSiteUrl: "https://hifigamingsociety.com/",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "HIFI",
    tokenDecimals: 18,
    releaseBlockNumber: 8135430, // block to start showing contract details
    // burnedTxUrl: '',
  },
  {
    id: "aperocket",
    address: "0x8AC93DC2F83cEf4032FbC71070Dc5Af06fd9D105",
    isActive: false,
    isLinear: false,
    name: t("ApeRocket"),
    subTitle: t("Vaulting Platform"),
    description: t(
      "ApeRocket is building a suite of products that provide automated yield optimization strategies for BNB Chain leveraging ApeSwap liquidity."
    ),
    launchDate: "May. 25",
    launchTime: "03:00 UTC",
    saleAmount: " 55,556 SPACE",
    raiseAmount: "$500,000",
    totalAmountRaised: "$18,498,896",
    projectSiteUrl: "https://aperocket.finance",
    currency: "BNB",
    currencyAddress: "0x0000000000000000000000000000000000000000",
    offeringCurrency: "SPACE",
    tokenDecimals: 18,
    releaseBlockNumber: 7378325,
    // burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
  },
  {
    id: "bitfresh",
    address: "0x898aaD14CBebA249D4eEdC9bd22D9B533F0DDf73",
    isActive: false,
    isLinear: false,
    name: t("Bitfresh"),
    subTitle: t("Community-Driven iGaming Platform"),
    description: t(
      "Bitfresh is developing a blockchain-based community driven social iGaming experience that pays dividends to players and token holders. The platform will be filled with reward systems to give players many ways to win and earn over time."
    ),
    launchDate: "Apr. 24",
    launchTime: "03:00 UTC",
    saleAmount: "100,000,000 BFT",
    raiseAmount: "$1,000,000",
    totalAmountRaised: "$5,781,873",
    digichainToBurn: "$500,000",
    projectSiteUrl: "https://www.bitfresh.win/public-sale",
    currency: "DIGICHAIN-BNB LP",
    currencyAddress: "0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713",
    offeringCurrency: "BFT",
    tokenDecimals: 18,
    releaseBlockNumber: 6565331,
    burnedTxUrl:
      "https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b",
  },
  {
    id: "jediyield",
    address: "0xCBe256573185d767EfD4a797CB360880728B8fD8",
    isActive: false,
    isLinear: false,
    name: t("Jedi Yield"),
    subTitle: t("Yield Farm Aggregator"),
    description: t(
      "JDIYield is building a smart portal to increase convenience and security for BNB Chain yield farmers. Users will be able to freely stake or unstake their funds regardless of their accessibility to yield farming dapps. Moreover, users can monitor their portfolios, look at token graphs, and harvest their farms all in one place."
    ),
    launchDate: "Apr. 2",
    launchTime: "03:00 UTC",
    saleAmount: "7,000,000 JDI",
    raiseAmount: "$700,000",
    totalAmountRaised: "$5,749,119",
    digichainToBurn: "$350,000",
    projectSiteUrl: "https://jdiyield.com/",
    currency: "DIGICHAIN-BNB LP",
    currencyAddress: "0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713",
    offeringCurrency: "JDI",
    tokenDecimals: 18,
    releaseBlockNumber: 6044304,
    burnedTxUrl:
      "https://bscscan.com/tx/0x5f65d5ce713e115be0646c473688aa052c98896f49d9c0c09ecd13aa8d459a1e",
  },
  {
    id: "astronaut",
    address: "0xd7e98ca54e6202fb6237b98c881817ed3e54d2ed",
    isActive: false,
    isLinear: false,
    name: t("Astronaut"),
    subTitle: t("Hybrid Launchpad"),
    description: t(
      "Astronaut is building a decentralized launchpad that enables projects to raise capital via crowdsourced fundraising."
    ),
    launchDate: "Mar. 15",
    launchTime: "11PM EDT",
    saleAmount: "2,000,000 NAUT",
    raiseAmount: "$400,000",
    totalAmountRaised: "$5,490,742",
    digichainToBurn: "$200,000",
    projectSiteUrl: "https://astronaut.to/",
    currency: "DIGICHAIN-BNB LP",
    currencyAddress: "0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713",
    offeringCurrency: "NAUT",
    tokenDecimals: 8,
    releaseBlockNumber: 5685490,
    burnedTxUrl:
      "https://bscscan.com/tx/0xbcfe28f2552d53f3cb49f37d6001aa7708070d3d17f75652c5096b7ecb4ce8fa",
  },
];

export const pastIfos: (t: ContextApi["t"]) => Ifo[] = (t) =>
  ifos(t).filter((ifo) => !ifo.isActive);

export default ifos;
