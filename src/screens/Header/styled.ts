import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { dynamicFontSizing } from "../../utils/dynamicFontSizing";

export const Container = styled.View`
  width: 100%;
  background-color: #75a1cc;
  margin-bottom: 30px;
  padding: 0px 0px 0px 0px;
`;

export const SafeArea = styled.View`
  width: 100%;
  margin-top: ${`${getStatusBarHeight() + dynamicFontSizing(20)}px `};
  padding: 0px 10px;
  margin-bottom: 50px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
`;
