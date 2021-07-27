import { dynamicFontSizing } from "../../utils/dynamicFontSizing";

export default {
  title: "light",

  colors: {
    primery: "#ff0",
    secundary: "#f00",

    background: "#f1f1f1",
    text: "#333",
  },
  sizes: {
    small: `${dynamicFontSizing(12)}px`,
    normal: `${dynamicFontSizing(14)}px`,
    large: `${dynamicFontSizing(16)}px`,
  },
  fonts: {
    title700: "Rajdhani_700Bold",
    title500: "Rajdhani_500Medium",
    text400: "Inter_400Regular",
    text500: "Inter_500Medium",
    text700: "Inter_700Bold",
  },
};
