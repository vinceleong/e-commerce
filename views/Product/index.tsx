import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMemo } from "react";
import styled from "styled-components";

import searchResult from "data/products";
import ImageCarousel from "./components/ImageCarousel";
import Divider from "components/Divider";
import ProductInfo from "./components/ProductInfo";
import Shipping from "./components/Shipping";
import Variations from "./components/Variations";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import ProductDescriptions from "./components/ProductDescription";
import BottomBar from "./components/BottomBar";
import VariationsModal from "./components/VariationsModal";
import ShippingModal from "./components/ShippingModal";


const Product: React.FC = () => {
  const router = useRouter();

  const { productId } = router.query || {};
  const product = searchResult.find(
    (result) => result.id === Number(productId)
  );

  const images: string[] = useMemo(() => {
    if (!product?.productImages) return [];
    return product.productImages;
  }, [product?.productImages]);

  return (
    <div>
      <ImageCarousel images={images} />
      <Content>
        <ProductInfo
          productName={product?.name}
          productPrice={product?.lowestPrice}
        />
        <Divider />
        <Shipping />
        <Divider />
        <Variations />
        <Shop />
        <ProductDetails />
        <ProductDescriptions />
      </Content>
      <BottomBar />
      <VariationsModal />
      <ShippingModal />
    </div>
  );
};

const Content = styled.div`
  padding-right: 0.6rem;
  padding-left: 0.6rem;
`;

export default Product;
