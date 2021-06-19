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
  }
}
