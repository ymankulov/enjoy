import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  productDetails: {},
  search: [],
  categoryProduct: [],
};

export const productSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    getProduct(state, action) {
      let pro = [...action.payload]
      state.products = pro;
    },

    details(state, action) {
      state.productDetails = state.products.find(
        (el) => el.id === action.payload
      );
    },

    sortProduct(state, action) {
      if (action.payload === "5") {
        state.products = state.products.sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
      }
      if (action.payload === "1") {
        state.products = state.products.sort(
          (a, b) => a.rating.rate - b.rating.rate
        );
      }
    },

    productSearch(state, action) {
      state.search = state.products.filter((el) => el.title === action.payload);
    },

    categoryPro(state, action) {
      let filterCategory = state.products.filter(
        (el) => el.category == action.payload
      );
      state.categoryProduct = filterCategory;
    },
  },
});

export const { getProduct, details, sortProduct, productSearch, categoryPro } =
  productSlice.actions;
export default productSlice.reducer;
