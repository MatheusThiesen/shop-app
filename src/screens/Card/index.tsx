import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Logo,
  ContainerContent,
  Title,
  Price,
  PriceOld,
} from "./styles";

interface HeaderProps {
  uri: string;
}

export const Card: React.FC<HeaderProps> = ({ uri }) => {
  const navigation = useNavigation();
  function handleOpenProduct() {
    navigation.navigate("Product");
  }

  return (
    <Container
      onPress={handleOpenProduct}
      activeOpacity={0.9}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Logo source={{ uri: uri }} resizeMode="contain" />
      <ContainerContent>
        <Title>Tênis Nike teste</Title>
        <PriceOld>R$ 249,99</PriceOld>
        <Price>R$ 249,99</Price>
      </ContainerContent>
    </Container>
  );
};
