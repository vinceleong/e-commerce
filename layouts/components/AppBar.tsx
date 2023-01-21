import styled from "styled-components";
import { useRouter } from "next/router";
import { CgChevronLeft } from "react-icons/cg";
import useMediaQuery from "hooks/useMediaQuery";

export interface AppBarProps {
  hasSearchBar: boolean;
}

const AppBar: React.FC<AppBarProps> = ({ hasSearchBar }) => {
  const router = useRouter();
  const isMd = useMediaQuery("md");
  const showBack = !isMd && !hasSearchBar;

  return (
    <Root hasSearchBar={hasSearchBar}>
      <div className="first-row">
        {
          showBack ? <CgChevronLeft className="back-button" onClick={router.back} /> : <h3 className="home-button" onClick={() => router.push("/")}>
            E-commerce
          </h3>
        }
        <div>
          <span className="link-button">Chat</span>
          <span className="link-button">Wishlist</span>
          <span className="link-button">Me</span>
        </div>
      </div>
      {hasSearchBar && (
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Search.." />
        </div>
      )}
    </Root>
  );
};

interface StyleProps {
  hasSearchBar: boolean;
}

const Root = styled.div<StyleProps>(p => `
    height: ${p.hasSearchBar ? "5em" : "4em"};
    background-color: ${p.theme.colors.primary};
    width: 100vw;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    position: sticky;
    top: 0;
    z-index: 999;

    .first-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
      margin-bottom: 1rem;
    }

    .home-button {
      cursor: pointer;
    }

    .link-button {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      cursor: pointer;
    }

    .search-bar {
      box-shadow: 10rem;
      height: 3rem;
      max-width: 32rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-radius: ${p.theme.borderRadius.sm};
      background-color: white;
      color: black;
      position: relative;
      top: -1.5rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    .search-input {
      width: 100%;
      height: 100%;
    }

    .back-button {
      font-size: 1.5rem;
    }
  `
);

export default AppBar;
