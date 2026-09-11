import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { username: "", isLogged: false },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.username = "";
      state.isLogged = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
