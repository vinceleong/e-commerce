export interface Product {
  id: number;
  name: string;
  lowestPrice: number;
  productImages?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13",
    lowestPrice: 3899,
    productImages: [
      "https://images.unsplash.com/photo-1635775844900-706fa4015ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    ],
  },
  {
    id: 2,
    name: "Sony WH-1000XM4",
    lowestPrice: 1100,
  },
  {
    id: 3,
    name: "Xbox Series Controller",
    lowestPrice: 250,
  },
  {
    id: 4,
    name: "Nintendo Switch OLED",
    lowestPrice: 1200,
  },
  {
    id: 5,
    name: "Orient Maestro Semi Open heart Small Seconds",
    lowestPrice: 1275,
  },
  {
    id: 6,
    name: "Uniqlo Polo",
    lowestPrice: 75,
  },
  {
    id: 7,
    name: "Uniqlo Oversized Airism",
    lowestPrice: 75,
  },
];

export default products;
