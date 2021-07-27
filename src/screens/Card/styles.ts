import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 6px;
  width: 130px;
  height: 200px;

  background-color: #fff;
  justify-content: space-around;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 70px;
`;

export const ContainerContent = styled.View``;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${(props) => props.theme.sizes.normal};
`;
export const Price = styled.Text`
  font-family: ${(props) => props.theme.fonts.text700};
  font-size: ${(props) => props.theme.sizes.normal};
`;
export const PriceOld = styled.Text`
  text-decoration: line-through;
  font-size: ${(props) => props.theme.sizes.small};
  font-family: ${(props) => props.theme.fonts.text400};
`;
