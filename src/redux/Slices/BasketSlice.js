import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  cartIcon: false,
};
export const basketSlice = createSlice({
  name: "BASKETPRODUCT",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let findProduct = state.basket.find((el) => el.id === action.payload.id);

      if (findProduct) {
        let changeProduct = state.basket.map((el) =>
          el.id === findProduct.id ? { ...el, quantity: el.quantity + 1 } : el
        );
        state.basket = changeProduct;
        localStorage.setItem("basket", JSON.stringify(changeProduct));
      } else {
        state.cartIcon = true;
        let addProduct = [...state.basket, { ...action.payload, quantity: 1 }];
        state.basket = addProduct;
        localStorage.setItem("basket", JSON.stringify(addProduct));
      }
    },
    cart(state, action) {
      state.cartIcon = false;
    },

    deleteBasket(state, action) {
      let deleteProduct = state.basket.filter(
        (el) => el.id !== action.payload.id
      );
      state.basket = deleteProduct;
      localStorage.setItem("basket", JSON.stringify(deleteProduct));
    },

    decrementQuantity(state, action) {
      let chageQuantity = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      state.basket = chageQuantity;
      localStorage.setItem("basket", JSON.stringify(chageQuantity));
    },
    remAll(state,action){
      localStorage.setItem("basket",JSON.stringify([]))
      state.basket = []
    }
  },
});

export const { addToBasket, deleteBasket, decrementQuantity, cart,remAll } =
  basketSlice.actions;
export default basketSlice.reducer;
