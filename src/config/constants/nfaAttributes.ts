import { NfaAttribute } from "./types";
import { ContextApi } from "../../contexts/Localization/types";

const NfaAttributes: (t: ContextApi["t"]) => NfaAttribute[] = (t) => [
  {
    id: "ApeSwap Brown",
    occurance: 105,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/ApeSwap%20Brown.png",
  },
  {
    id: "Blood Orange",
    occurance: 90,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Blood%20Orange.png",
  },
  {
    id: "Brown",
    occurance: 93,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Brown.png",
  },
  {
    id: "Burnt Orange",
    occurance: 100,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Burnt%20Orange.png",
  },
  {
    id: "Gold",
    occurance: 15,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Gold.png",
  },
  {
    id: "Green Grey",
    occurance: 86,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Green%20Grey.png",
  },
  {
    id: "Highlighter Blue",
    occurance: 95,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Highlighter%20Blue.png",
  },
  {
    id: "Moon Blue",
    occurance: 98,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Moon%20Blue.png",
  },
  {
    id: "Pale Pink",
    occurance: 97,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Pale%20Pink.png",
  },
  {
    id: "Pale Zombie",
    occurance: 22,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Pale%20Zombie.png",
  },
  {
    id: "Ripe Digichain",
    occurance: 106,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Ripe%20Digichain.png",
  },
  {
    id: "Smoke Grey",
    occurance: 93,
    category: t("Face Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/00.%20Face%20Color/Smoke%20Grey.png",
  },
  {
    id: "Albino",
    occurance: 24,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Albino.png",
  },
  {
    id: "Army Green",
    occurance: 155,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Army%20Green.png",
  },
  {
    id: "Dark Grey",
    occurance: 161,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Dark%20Grey.png",
  },
  {
    id: "Grape Purple",
    occurance: 19,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Grape%20Purple.png",
  },
  {
    id: "Hazel",
    occurance: 175,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Hazel.png",
  },
  {
    id: "Maroon",
    occurance: 161,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Maroon.png",
  },
  {
    id: "Orangutan",
    occurance: 161,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Orangutan.png",
  },
  {
    id: "Zombie Purple",
    occurance: 144,
    category: t("Base Color"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/01.%20Base%20Color/Zombie%20Purple.png",
  },
  {
    id: "Earings",
    occurance: 50,
    category: t("Frame"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/02.%20Frames/Earings.png",
  },
  {
    id: "Main Frame",
    occurance: 950,
    category: t("Frame"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/02.%20Frames/Main%20Frame.png",
  },
  {
    id: "Buck Teeth",
    occurance: 182,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Buck%20Teeth.png",
  },
  {
    id: "Gold Tooth",
    occurance: 25,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Gold%20Tooth.png",
  },
  {
    id: "Happy",
    occurance: 282,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Happy.png",
  },
  {
    id: "Open Smile",
    occurance: 30,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Open%20Smile.png",
  },
  {
    id: "Open",
    occurance: 100,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Open.png",
  },
  {
    id: "Sad",
    occurance: 189,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Sad.png",
  },
  {
    id: "Stale",
    occurance: 289,
    category: t("Mouth"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/03.%20Mouths/Stale.png",
  },
  {
    id: "Closed",
    occurance: 95,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Closed.png",
  },
  {
    id: "Happy",
    occurance: 282,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Happy.png",
  },
  {
    id: "Lazer",
    occurance: 32,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Lazer.png",
  },
  {
    id: "Normal",
    occurance: 96,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Normal.png",
  },
  {
    id: "Pearl",
    occurance: 96,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Pearl.png",
  },
  {
    id: "Pink Sunglasses",
    occurance: 92,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Pink%20Sunglasses.png",
  },
  {
    id: "Red Sunglasses",
    occurance: 104,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Red%20Sunglasses.png",
  },
  {
    id: "Red",
    occurance: 74,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Red.png",
  },
  {
    id: "Sans Red",
    occurance: 18,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Sans%20Red.png",
  },
  {
    id: "Sans",
    occurance: 89,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Sans.png",
  },
  {
    id: "Shades",
    occurance: 187,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/Shades.png",
  },
  {
    id: "VR Goggles",
    occurance: 100,
    category: t("Eyes"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/04.%20Eyes/VR%20Goggles.png",
  },
  {
    id: "Astronaut",
    occurance: 100,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Astronaut.png",
  },
  {
    id: "Avatar",
    occurance: 23,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Avatar.png",
  },
  {
    id: "Digichain Hair",
    occurance: 119,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Digichain%20Hair.png",
  },
  {
    id: "Brown Hair",
    occurance: 103,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Brown%20Hair.png",
  },
  {
    id: "Cop",
    occurance: 113,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Cop.png",
  },
  {
    id: "Dark Cowboy",
    occurance: 0,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Dark%20Cowboy.png",
  },
  {
    id: "Pale Cowboy",
    occurance: 104,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Pale%20Cowboy.png",
  },
  {
    id: "Red Tassle",
    occurance: 102,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Red%20Tassle.png",
  },
  {
    id: "Sweat Band",
    occurance: 89,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Sweat%20Band.png",
  },
  {
    id: "Third Eye",
    occurance: 128,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Third%20Eye.png",
  },
  {
    id: "Visor",
    occurance: 91,
    category: t("Hat"),
    uri: "https://raw.githubusercontent.com/digichaincoin/non-fungible-apes/main/attributes/05.%20Hats/Visor.png",
  },
];

export default NfaAttributes;
