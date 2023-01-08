import create from "zustand/react";

import { randomIntFromInterval } from "utils/numberUtils";

interface cartItem {
  id: number;
  productId: number;
  variantId: number;
  quantity: number;
}

interface storeState {
  carts: cartItem[];
  addCart: (data: any) => void;
  deleteCart: (cartId: number) => void;
  incQuantity: (cartId: number, quantity: number) => void;
}

const useCartStore = create<storeState>((set) => ({
  carts: [],
  addCart: (product) =>
    set((state) => {
      let newCarts;
      if (state.carts.some((cart) => cart.productId === product.id)) {
        newCarts = state.carts.map((cart) => {
          if (cart.productId !== product.id) return cart;
          return {
            ...cart,
            quantity: cart.quantity + product.quantity,
          };
        });
      } else {
        newCarts = [
          ...state.carts,
          {
            id: randomIntFromInterval(1, 10000),
            productId: product.id,
            quantity: product.quantity,
            variantId: product.variantId,
          },
        ];
      }
      return { carts: newCarts };
    }),
  deleteCart: (cartId) =>
    set((state) => ({
      carts: state.carts.filter((cart) => cart.id !== cartId),
    })),
  incQuantity: (cartId, quantity) => {
    set((state) => ({
      carts: state.carts.map((cart) => {
        if (cart.id !== cartId) return cart;
        return {
          ...cart,
          quantity: cart.quantity + quantity,
        };
      }),
    }));
  },
}));

export default useCartStore;
