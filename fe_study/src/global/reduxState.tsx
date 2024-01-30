import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  toggleDisplay: false,
};

const reduxState = createSlice({
  name: "study-app",
  initialState,
  reducers: {
    login: (state: any, { payload }) => {
      state.user = payload;
    },
    logout: (state: any) => {
      state.user = null;
    },
    changeToggle: (state: any, { payload }) => {
      state.toggle = payload;
    },
    changeToggleDisplay: (state: any, { payload }) => {
      state.toggleDisplay = payload;
    },
  },
});

export const { changeToggle, login, logout, changeToggleDisplay } =
  reduxState.actions;

export default reduxState.reducer;
