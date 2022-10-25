import { Values } from "./types";
import { ContextApi } from "../../../../contexts/Localization/types";

export const defaultValues: (t: ContextApi["t"]) => Values[] = (t) => [
  {
    title: t("Secure"),
    description: t(
      "We always prioritize security in transactions and continue to upgrade the system to the latest version so that it is always updated for data security."
    ),
    logoImg: "images/transparency.png",
  },
  {
    title: t("Transparency"),
    description: t(
      "Digidex is a Decentralized and transparent Project so you can see the results of digidex transaction activities on the blockchain used."
    ),
    logoImg: "images/transparency.png",
  },
  {
    title: t("Low Fees"),
    description: t(
      "We want Digidex users to feel comfortable by providing low fees and speed in transacting"
    ),
    logoImg: "images/transparency.png",
  },
];
