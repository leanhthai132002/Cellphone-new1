import {configureStore} from '@reduxjs/toolkit'
import cartSlice from "../../../pages/Home/Cart/cartSlice.js";
import productSlice from "../../Home/Detail/productSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  }
})

export default store