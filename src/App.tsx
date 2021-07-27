import React from "react";

import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import Routes from "./routes";

export default function App() {
  //dark, light, null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.light;

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
