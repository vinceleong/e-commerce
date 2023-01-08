import styled from "styled-components";
import Link from "next/link";

import searchResult from "data/searchResult";

const SearchResult: React.FC = () => {
  return (
    <Root>
      {searchResult.map((result) => (
        <Link className="result-item" key={result.id} href={`/product/${result.id}`}>
          <div className="image" />
          <div>
            <h5 className="name">{result.name}</h5>
            <span className="price">From RM${result.lowestPrice}</span>
          </div>
        </Link>
      ))}
    </Root>
  );
};

const Root = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .result-item {
    display: flex;
    column-gap: 1rem;
    padding: 0.5rem;
    :hover {
      outline: 0.1rem solid ${theme.colors.primary};
    }
    border-radius: ${theme.borderRadius.sm};
    cursor: pointer;
  }

  .image {
    width: 5rem;
    height: 5rem;
    background-color: gainsboro;
    border-radius: ${theme.borderRadius.md};
  }  

  .name {
    margin-bottom: 1rem;
  }

  .price {
    font-size: 0.9rem;
    color: gray;
  }
`);

export default SearchResult;
