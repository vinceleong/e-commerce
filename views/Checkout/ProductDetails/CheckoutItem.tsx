import styled from "styled-components";
import Image from "next/image";

export interface Props {
  name: string;
  variation: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CheckoutItem: React.FC<Props> = ({
  name,
  variation,
  price,
  quantity,
  imageUrl,
}) => {
  return (
    <Root>
      <div
        className="image-container"
        style={{
          height: "60px",
          width: "60px",
        }}
      >
        <Image width={60} height={60} src={imageUrl} alt={imageUrl} />
      </div>
      <div className="details">
        <div>{name}</div>
        <div>{variation}</div>
        <div className="price">
          <span>RM{price}</span>
          <span>X{quantity}</span>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.div(p => `
  display: flex;
  column-gap: 1rem;

  .image-container {
    height: 60px;
    width: 60px;
  }

  .details {
    width: 100%;
  }

  .price {
    display: flex;
    justify-content: space-between;
  }
`);

export default CheckoutItem;
