import { createSlice } from "@reduxjs/toolkit";

const userCommentSlice = createSlice({
  name: "userComment",
  initialState: { parentComments: [] },
  reducers: {
    pushComment(state, action) {
      state.parentComments.push(action.payload);
    },
  },
});

export default userCommentSlice;

export const userCommentActions = userCommentSlice.actions;
