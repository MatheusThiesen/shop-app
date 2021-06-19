import React from "react";

import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";

import Home from "./screens/Home";

export default function App() {
  //dark, light, null
  const deviceTheme = useColorScheme();
  console.log(deviceTheme);
  const theme = themes[deviceTheme] || themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
