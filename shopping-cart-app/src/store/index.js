import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore function from Redux Toolkit

import cartReducer from "./slices/cart-slice"; // Importing cartReducer from cart-slice file

const store = configureStore({ // Configuring Redux store using configureStore function
  reducer: { // Defining reducers for the store
    cart: cartReducer, // Associating cartReducer with 'cart' slice of the store
  },
});

export default store; // Exporting the configured Redux store
