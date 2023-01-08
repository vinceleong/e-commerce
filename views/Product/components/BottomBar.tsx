import styled from "styled-components";

import { useVariationsModel } from "./VariationsModal";
import FloatingBottomBar from "components/FloatingBottomBar";

const BottomBar: React.FC = () => {
  const handleOpen = useVariationsModel((state) => state.handleOpen);

  return (
    <FloatingBottomBar>
      <ButtonsContainer>
        <Button
          onClick={() =>
            handleOpen({
              type: "ADD_TO_CART",
            })
          }
        >
          Add to cart
        </Button>
        <Button
          onClick={() =>
            handleOpen({
              type: "BUY",
            })
          }
        >
          Buy Now
        </Button>
      </ButtonsContainer>
    </FloatingBottomBar>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.borderRadius.custom(99)};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: ${(props) => props.theme.fontSize.md};
  width: 100%;
  ${(props) =>
    props.theme.size.md(`
        width: auto;
    `)}
`;

export default BottomBar;
