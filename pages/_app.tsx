import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Alert from "components/Alert";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

import MainLayout from "layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
        <Alert />
      </MainLayout>
    </ThemeProvider>
  );
}
