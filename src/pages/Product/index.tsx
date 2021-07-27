import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Animated, View, Image, Dimensions } from "react-native";

import {
  Container,
  Content,
  Title,
  Price,
  PriceDescription,
  PriceOldDescription,
} from "./styles";

import { CarouselImage } from "../../screens/CarouselImage";

const data = [
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_01" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_02" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_03" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_04" },
];
const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGTH = height * 0.75;

export function Product() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <CarouselImage data={data} />

        <Content>
          <Title>Tênis Nike teste</Title>
          <Price>
            <PriceOldDescription>R$ 249,99</PriceOldDescription>
            <PriceDescription>R$ 249,99</PriceDescription>
          </Price>
        </Content>
      </Container>
    </>
  );
}
