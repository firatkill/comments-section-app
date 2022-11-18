import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import userCommentSlice from "./userComment-slice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, userComment: userCommentSlice.reducer },
});

export default store;
