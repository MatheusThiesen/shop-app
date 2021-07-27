import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, View } from "react-native";

import { Header } from "../../screens/Header";
import { Card } from "../../screens/Card";
import { ListDivider } from "../../screens/ListDivider";

import { Container } from "./styles";

const data = [
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_01" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_01" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_01" },
  { uri: "https://alpar.sfo3.digitaloceanspaces.com/Produtos/BQ3204001_01" },
];

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <Header></Header>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Card uri={item.uri} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          ItemSeparatorComponent={ListDivider}
          style={{ paddingHorizontal: 10 }}
          ListFooterComponent={<View style={{ width: 20 }} />}
        />
      </Container>
    </>
  );
}
