import styled from "styled-components";
import { useMemo } from "react";
import { CgChevronRight } from "react-icons/cg";

import variations from "data/variations";
import { useVariationsModel } from "./VariationsModal";

const Variations: React.FC = () => {
  const displayVariations = useMemo(() => {
    if (variations.length === 0) return variations;
    return variations[0].variations.slice(0, 5);
  }, []);

  const handleOpen = useVariationsModel((state) => state.handleOpen);

  return (
    <Root
      onClick={() =>
        handleOpen({
          type: "ADD_TO_CART",
        })
      }>
      <div>
        <h5>Select Variation</h5>
        <VariationContainer
        >
          {displayVariations.map((variation) => (
            <VariationItem key={variation.id}>{variation.name}</VariationItem>
          ))}
        </VariationContainer>
      </div>
      <CgChevronRight />
    </Root>
  );
};
const Root = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const VariationContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  column-gap: 1rem;
`;
const VariationItem = styled.div`
  outline: 0.1rem solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 0.5rem;
`;

export default Variations;
