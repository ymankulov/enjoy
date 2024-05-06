import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: JSON.parse(localStorage.getItem("login")) || {},
  password: JSON.parse(localStorage.getItem("pass")) || "123",
};

export const logInSlice = createSlice({
  name: "USER_SLICE",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logOut(state, action) {
      state.user = {};
      localStorage.setItem("login", JSON.stringify({}));
    },
    changePassword(state, action) {
      state.password = action.payload;
      localStorage.setItem("pass", JSON.stringify(action.payload));
    },
  },
});
export const { addUser, logOut, changePassword } = logInSlice.actions;
export default logInSlice.reducer;
