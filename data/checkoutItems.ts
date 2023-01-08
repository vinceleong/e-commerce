import products from "./products";

const checkoutItems = products.slice(0, 2).map((product, index) => ({
  id: product.id,
  name: product.name,
  productImages: product.productImages,
  price: product.lowestPrice,
  variation: `Variation ${index + 1}`,
  quantity: index + 1,
}));

export default checkoutItems;
