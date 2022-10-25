import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line import/no-unresolved
import { DigiSwapTheme } from "@digidexfinance/uikit/dist/theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends DigiSwapTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
