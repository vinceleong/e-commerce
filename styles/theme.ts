import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
    borderRadius: (scale: number) => string;
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#007090",
    secondary: "#01A7C2",
    background: "#EAEBED",
  },
  borderRadius: (scale) => scale * 0.125 + "rem",
};

export default theme;
