import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice function from Redux Toolkit

const initialState = []; // Initializing initial state for the cart

const cartSlice = createSlice({ // Creating a slice of the Redux store for managing the cart state
  name: "cart", // Name of the slice
  initialState, // Initial state of the slice
  reducers: { // Reducer functions for handling state changes
    addToCart(state, action) { // Reducer function for adding an item to the cart
      console.log(action); // Logging the action payload
      state.push(action.payload); // Pushing the new item to the cart state
    },
    removeFromCart(state, action) { // Reducer function for removing an item from the cart
      return state.filter((item) => item.id !== action.payload); // Filtering out the item with the given id from the cart
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // Exporting action creators for addToCart and removeFromCart

export default cartSlice.reducer; // Exporting the reducer function for the cart slice

