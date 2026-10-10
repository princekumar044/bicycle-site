// src/store/reducers/selectedFolderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.Products = action.payload; 
    },
  },
});

export const { loadProducts } = ProductSlice.actions;
export default ProductSlice.reducer;