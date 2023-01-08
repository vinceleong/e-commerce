import styled from "styled-components";
import productDescriptions from "data/productDescriptions";

const ProductDescriptions: React.FC = () => {
  return (
    <Root>
      <Header>Product Descriptions</Header>
      <Description>{productDescriptions}</Description>
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

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  white-space: pre-wrap;
`;

export default ProductDescriptions;
