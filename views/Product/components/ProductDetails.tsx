import styled from "styled-components";
import productDetails from "data/productDetails";

const ProductDetails: React.FC = () => {
  return (
    <Root>
      <Header>Product Details</Header>
      <DetailsContainer>
        {Object.entries(productDetails).map(([key, value]) => (
          <DetailItem key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </DetailItem>
        ))}
      </DetailsContainer>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Header = styled.h5`
  margin-bottom: 1rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default ProductDetails;
