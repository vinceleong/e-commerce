import styled from "styled-components";

import Entry from "./Entry";

const Price: React.FC = () => {
  return (
    <Root>
      <Entry title="Sub-total" value="RM308.00" />
      <Entry title="Shipping" value="RM10.50" />
      <Entry title="Discount" value="0.00" />
      <Entry title="Total" value="RM308.00" />
    </Root>
  );
};

const Root = styled.div(p => `
  margin-top: 1rem;
  border: ${p.theme.border};
  border-radius: ${p.theme.borderRadius.md};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`);

export default Price;
