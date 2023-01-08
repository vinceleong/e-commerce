import styled from "styled-components";
import checkoutItems from "data/checkoutItems";
import shop from "data/shop";
import CheckoutItem from "./CheckoutItem";

const ProductDetails: React.FC = () => {
  return (
    <Root>
      <Shop>{shop.name}</Shop>
      <Item>
        <CheckoutItemList>
          {checkoutItems.map((item) => (
            <CheckoutItem
              key={item.id}
              name={item.name}
              variation={item.variation}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.productImages?.[0] ?? ""}
            />
          ))}
        </CheckoutItemList>
      </Item>
    </Root>
  );
};

const Root = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.md};
  border: ${(p) => p.theme.border};
  overflow: hidden;
`;

const Shop = styled.div`
  padding: 1rem;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
`;

const Item = styled.div`
  padding: 1rem;
`;

const CheckoutItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export default ProductDetails;
