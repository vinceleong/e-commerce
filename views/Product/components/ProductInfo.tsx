import styled from "styled-components";

export interface Props {
  productName?: string;
  productPrice?: number;
}

const ProductInfo: React.FC<Props> = ({ productName, productPrice }) => {
  return (
    <div>
      <ProductName>{productName ?? "Product Name"}</ProductName>
      <ProductPrice>RM {productPrice ?? 0}</ProductPrice>
    </div>
  );
};

const ProductName = styled.h3`
  margin-bottom: 0.4rem;
`;

const ProductPrice = styled.h5`
  margin-bottom: 0.4rem;
`;

export default ProductInfo;
