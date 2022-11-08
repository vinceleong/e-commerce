import { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

export interface Props {
  children: ReactNode;
  title?: string;
}

const AppBar = styled.div`
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;
  position: sticky;
  top: 0;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 1rem;
`;

const HomeButton = styled.span`
  cursor: pointer;
`;

const LinkButton = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const SearchBar = styled.div`
  box-shadow: 10rem;
  height: 3rem;
  max-width: 32rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: ${(props) => props.theme.borderRadius(3)};
  background-color: white;
  color: black;
  position: relative;
  top: -1.5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 20rem;

  @media (min-width: 768px) {
    max-width: 50rem;
  }
  @media (max-width: 1024px) {
    max-width: 60rem;
  }
`;

// ${(props) =>
//   props.theme.size.sm(`
//   max-width: 30rem;
// `)}

// ${(props) =>
//   props.theme.size.md(`
//   max-width: 60rem;
// `)}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ?? "E-commerce"}</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar>
        <FirstRow>
          <HomeButton>E-commerce</HomeButton>
          <div>
            <LinkButton>Chat</LinkButton>
            <LinkButton>Wishlist</LinkButton>
            <LinkButton>Me</LinkButton>
          </div>
        </FirstRow>
        <SearchBar>
          <SearchInput type="text" placeholder="Search.." />
        </SearchBar>
      </AppBar>
      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;
