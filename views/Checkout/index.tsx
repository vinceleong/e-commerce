import styled from "styled-components";
import { useRouter } from "next/router";

import Delivery from "./Delivery";
import Divider from "components/Divider";
import ProductDetails from "./ProductDetails";
import Price from "./Price";
import FloatingBottomBar from "components/FloatingBottomBar";

const Checkout: React.FC = () => {
  const router = useRouter();

  return (
    <Root>
      <Delivery />
      <Divider />
      <ProductDetails />
      <Price />
      <FloatingBottomBar>
        <div className="pay-button-container">
          <button
            className="pay-button"
            onClick={() => router.push("/payment-success")}
          >
            <div className="total-price">Total RM318.50</div>
            <div>{`Pay >`}</div>
          </button>
        </div>
      </FloatingBottomBar>
    </Root>
  );
};


const Root = styled.div(p => `
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  .pay-button-container {
    display: flex;
    justify-content: center;
    column-gap: 1rem;
  }

  .pay-button {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${p.theme.size.md(`
      max-width: 25rem;
    `)}
   }

  .total-price {
    font-size: ${p.theme.fontSize.md};
  }

  .total-price {
    font-size: ${p.theme.fontSize.md};
  }
`
);

export default Checkout;
