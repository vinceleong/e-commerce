import { useMemo } from "react";
import styled from "styled-components";

import deliveryAddresses from "data/deliveryAddresses";

const Delivery: React.FC = () => {
  const deliveryAddress = useMemo(() => {
    return deliveryAddresses[0];
  }, []);

  return (
    <div>
      <h2>Delivery</h2>
      <DeliveryContainer>
        <div className="title">Delivery Address</div>
        <div>{deliveryAddress.name}</div>
        <div>{deliveryAddress.phoneNumber}</div>
        <div>{deliveryAddress.address}</div>
      </DeliveryContainer>
    </div>
  );
};

const DeliveryContainer = styled.div(p => `
  margin-top: 1rem;
  border: ${p.theme.border};
  padding: 1rem;
  border-radius: ${p.theme.borderRadius.lg};

  .title {
    margin-bottom: 1rem;
  }

`);
export default Delivery;
