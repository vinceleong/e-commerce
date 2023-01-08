import styled from "styled-components";
import create from "zustand";
import { useState } from "react";
import { useRouter } from "next/router";

import Modal from "components/Modal";
import variations from "data/variations";
import Divider from "components/Divider";
import NumberInput from "components/NumberInput";
import { useAlert } from "components/Alert";

interface state {
  open: boolean;
  data: data;
  handleOpen: (data: data) => void;
  handleClose: () => void;
}

interface data {
  type?: "ADD_TO_CART" | "BUY";
}

export const useVariationsModel = create<state>((set) => ({
  open: false,
  data: {},
  handleOpen: (data) =>
    set({
      open: true,
      data,
    }),
  handleClose: () =>
    set({
      open: false,
      data: {},
    }),
}));

const VariationsModal: React.FC = () => {
  const open = useVariationsModel((state) => state.open);
  const handleClose = useVariationsModel((state) => state.handleClose);
  const { type } = useVariationsModel((state) => state.data);
  const router = useRouter();
  const openAlert = useAlert(state => state.openAlert);

  const [quantity, setQuantity] = useState(1);

  const onClickAddToCart = () => {
    handleClose();
    openAlert("Successfully added to cart!", { type: 'success' })
  };

  const onClickBuy = () => {
    handleClose();
    router.push("/checkout");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Root>
        <div>
          <VariationContainer>
            {variations.map(({ id, name, variations }) => (
              <div key={id}>
                <Title>{name}</Title>
                <VariantRow>
                  {variations.map(({ id, name }) => (
                    <VariantButton key={id}>{name}</VariantButton>
                  ))}
                </VariantRow>
              </div>
            ))}
          </VariationContainer>
          <Divider />
          <Title>Quantity</Title>
          <NumberInput value={quantity} onChange={setQuantity} />
        </div>
        <ButtonContainer>
          {type === "ADD_TO_CART" && (
            <ConfirmButton onClick={onClickAddToCart}>
              Add to Cart
            </ConfirmButton>
          )}
          {type === "BUY" && (
            <ConfirmButton onClick={onClickBuy}>Buy</ConfirmButton>
          )}
        </ButtonContainer>
      </Root>
    </Modal>
  );
};

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${(props) =>
    props.theme.size.md(`
    min-height: 20rem;
    width: 30rem;
    margin-bottom: auto;
  `)}
`;

const VariationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const VariantRow = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  margin-bottom: 1rem;
`;

const VariantButton = styled.button`
  outline: 0.1rem solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  color: black;
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  ${(props) =>
    props.theme.size.md(`
    position: relative;
    padding: auto;
    margin-top: 1rem;
  `)}
`;

const ConfirmButton = styled.button`
  width: 100%;
`;

export default VariationsModal;
