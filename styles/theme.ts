import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundSecondary: string;
      primaryHover: string;
      success: string;
      error: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      circle: string;
      custom: (scale: number) => string;
    };
    size: {
      md: (css: string) => string;
      lg: (css: string) => string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      lighter: string;
      light: string;
      normal: string;
      bold: string;
      bolder: string;
    };
    border: string;
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#007090",
    secondary: "#01A7C2",
    background: "white",
    backgroundSecondary: "#EAEBED",
    primaryHover: "#006090",
    success: "#22c55e",
    error: "#ef4444",
  },
  borderRadius: {
    sm: 3 * 0.125 + "rem",
    md: 5 * 0.125 + "rem",
    lg: 10 * 0.125 + "rem",
    circle: 999 * 0.125 + "rem",
    custom: (scale) => scale * 0.125 + "rem",
  },
  size: {
    md: (css: string) => `@media (min-width: 768px) {
      ${css}
    }`,
    lg: (css: string) => `@media (min-width: 1080px) {
      ${css}
    }`,
  },
  fontSize: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
  },
  fontWeight: {
    lighter: "200",
    light: "300",
    normal: "400",
    bold: "bold",
    bolder: "bolder",
  },
  border: "1px solid gainsboro",
};

export default theme;
