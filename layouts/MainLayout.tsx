import { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import AppBar from "./components/AppBar";

export interface Props {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  const router = useRouter();
  const theme = useTheme();
  const { pathname } = router;

  const hasSearchBar = ![
    "/product/[productId]",
    "/checkout",
    "/payment-success",
  ].includes(pathname);
  const hasPadding = pathname !== "/product/[productId]";

  return (
    <div>
      <Head>
        <title>{title ?? "E-commerce"}</title>
        <meta name="description" />
        <meta name="theme-color" content={theme.colors.primary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar hasSearchBar={hasSearchBar} />
      <Content hasSearchBar={hasSearchBar} hasPadding={hasPadding}>
        {children}
      </Content>
    </div>
  );
};

interface StyleProps {
  hasSearchBar: boolean;
  hasPadding: boolean;
}

const Content = styled.div<StyleProps>(p => `
  ${p.hasSearchBar && "margin-top: 4rem;"}
  ${p.hasPadding
    ? "padding-left: 0.5rem; padding-right: 0.5rem;"
    : "padding-left: 0; padding-right: 0;"
  }
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  ${p.theme.size.md(`
    max-width: 50rem;
  `)}
  ${p.theme.size.lg(`
    max-width: 60rem;
  `)}
`
);
export default MainLayout;
