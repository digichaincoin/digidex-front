import styled from "styled-components";
import { Flex, Text } from "@digidexfinance/uikit";

export const StyledIfoCardHeader = styled(Flex)`
  text-align: initial;
  & > div {
    flex: 1;
  }
`;

export const Stack = styled(Flex)`
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 26px;
`;
