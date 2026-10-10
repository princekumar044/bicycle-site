// src/store/reducers/selectedFolderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyer: [],
};

const BuyerSlice = createSlice({
  name: "buyer",
  initialState,
  reducers: {
    loadbuyer: (state, action) => {
      state.buyer = action.payload; 
    },
  },
});

export const { loadbuyer } = BuyerSlice.actions;
export default BuyerSlice.reducer;