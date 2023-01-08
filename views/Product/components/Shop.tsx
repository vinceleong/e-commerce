import styled from "styled-components";
import Image from "next/image";

import shop from "data/shop";

const Shop: React.FC = () => {
  const getLastActive = (date: Date) => {
    return "55 minutes ago";
  };
  return (
    <Root>
      <ShopImage
        alt="shop image"
        src={shop.imageUrl || ""}
        height={60}
        width={60}
      />
      <ShopInfo>
        <h5>{shop.name}</h5>
        <SecInfo>{`Active ${getLastActive(shop.lastActive)}`}</SecInfo>
        <SecInfo>{shop.location}</SecInfo>
      </ShopInfo>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  padding: 1rem;
  column-gap: 1rem;
`;

const ShopImage = styled(Image)`
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SecInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default Shop;
