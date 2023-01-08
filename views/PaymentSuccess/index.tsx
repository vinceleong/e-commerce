import styled from "styled-components";

import FloatingBottomBar from "components/FloatingBottomBar";
import { useRouter } from "next/router";

const PaymentSuccess: React.FC = () => {
  const router = useRouter();

  return (
    <Root>
      <div className="circle">
        <h1 className="check">&#x2713;</h1>
      </div>
      <div className="message">Payment Success</div>
      <div className="description">
        Your payment has been processed successfully
      </div>
      <FloatingBottomBar>
        <div className="button-container">
          <button onClick={() => router.push("/")} className="action-button">
            Continue Shopping
          </button>
        </div>
      </FloatingBottomBar>
    </Root>
  );
};

const Root = styled.div(
  ({ theme }) => `
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    .circle {
      border-radius: ${theme.borderRadius.circle};
      background-color: ${theme.colors.success};
      height: 5rem;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .check{
      color: white;
      font-size: 3rem;
    }

    .message {
      font-size: ${theme.fontSize.md};
    }

    .description {
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontWeight.light}
    }

    .button-container {
      display: flex;
      justify-content: center;
    }

    .action-button {
      width: 100%;
      font-size: ${theme.fontSize.md};
      max-width: 35rem;
    }
    `
);

export default PaymentSuccess;
