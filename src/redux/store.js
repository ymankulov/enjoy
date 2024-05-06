import { configureStore } from "@reduxjs/toolkit";
import LogInSlice from "./Slices/LogInSlice";
import ProductSlice from "./Slices/ProductSlice";
import BasketSlice from "./Slices/BasketSlice";

export const store = configureStore({
  reducer: {
    userSlice: LogInSlice,
    productSlice: ProductSlice,
    basketSlice: BasketSlice,
  },
});
