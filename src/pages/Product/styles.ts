import styled from "styled-components/native";
import { dynamicFontSizing } from "../../utils/dynamicFontSizing";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  align-items: flex-start;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${dynamicFontSizing(20)}px;
`;

export const Price = styled.View`
  width: 100%;
  padding: 10px 0;
`;
export const PriceOldDescription = styled.Text`
  text-decoration: line-through;
  font-size: ${dynamicFontSizing(12)}px;
  font-family: ${(props) => props.theme.fonts.text400};
  color: #888;
`;
export const PriceDescription = styled.Text`
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${dynamicFontSizing(24)}px;
`;
