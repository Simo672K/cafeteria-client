import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./cartSlice";
import productsListSlice from "./productsListSlice";

export const store= configureStore({
  reducer: {
    cart: cartSlice,
    products: productsListSlice,
  }
})