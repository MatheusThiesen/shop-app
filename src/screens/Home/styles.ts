import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background};
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;
