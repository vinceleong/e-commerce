import styled from "styled-components";

import { useShippingModal } from "./ShippingModal";
import { CgChevronRight } from "react-icons/cg";

const Shipping: React.FC = () => {
    const openShippingModal = useShippingModal(state => state.handleOpen);

    return (
        <Root onClick={openShippingModal}>
            <div>
                <h5>Shipping Fees</h5>
                <Description>Free shipping for orders over RM15.00</Description>
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
`
const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default Shipping;
