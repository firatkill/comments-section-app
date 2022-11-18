import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { username: "" },
  reducers: {
    assignUserName(state, action) {
      state.username = action.payload;
    },
  },
});
export default uiSlice;

export const uiActions = uiSlice.actions;
