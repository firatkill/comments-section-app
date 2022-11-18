import React from "react";
import CommentInputCSS from "./CommentInput.module.css";
function CommentInput(props) {
  const styled = CommentInputCSS;
  return (
    <input
      value={props.value}
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
      autoFocus
      id="input"
      commenttype={props.commenttype}
      type="text"
      required
    />
  );
}

export default CommentInput;
