import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primery: string;
      secundary: string;
      background: string;
      text: string;
    };
    sizes: {
      small: string;
      normal: string;
      large: string;
    };
    fonts: {
      title700: string;
      title500: string;
      text400: string;
      text500: string;
      text700: string;
    };
  }
}
