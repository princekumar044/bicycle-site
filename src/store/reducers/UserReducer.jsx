import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null, 
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadusers: (state, action) => {
      state.users = action.payload;
    },
    logoutuser: (state) => {
      state.users = null;
      localStorage.removeItem("users");
    },
  },
});

export const { loadusers, logoutuser } = UserSlice.actions;
export default UserSlice.reducer;
