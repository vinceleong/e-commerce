import styled from "styled-components";

const Filters: React.FC = () => {
  return (
    <Root>
      <button className="all-filters-btn">All Filters</button>
      <button className="filter-btn">Categories</button>
      <button className="filter-btn">Rating</button>
      <button className="filter-btn">Price Range</button>
      <button className="filter-btn">Conditions</button>
    </Root>
  );
};

const Root = styled.div(({ theme }) => `
  display: flex;
  column-gap: 0.5rem;

  .all-filters-btn {
    background-color: black;
    color: white;
  }

  .filter-btn {
    background-color: gainsboro;
    color: black;
  }
`);

export default Filters;
