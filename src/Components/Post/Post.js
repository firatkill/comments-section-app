import React, { useState } from "react";
import PostCSS from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userCommentActions } from "../../Redux/userComment-slice";
import CommentInput from "../UI/CommentInput/CommentInput";
function Post() {
  const styled = PostCSS;
  const dispatch = useDispatch();

  const username = useSelector((state) => state.ui.username);
  const [inputValue, setInputValue] = useState("");
  const [isReplyInput, setIsReplyInput] = useState(false);
  const date = new Date();

  const keyHandler = (e) => {
    if (e.key === "Enter" && inputValue.trim().length > 5) {
      dispatch(
        userCommentActions.pushComment({
          username: username,
          comment: inputValue,
          time: date.toLocaleString(),
          vote: 0,
        })
      );
      setInputValue("");
      setIsReplyInput(false);
    }
  };

  const changeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div
      onBlur={() => {
        setIsReplyInput(false);
      }}
      className={styled.PostContainer}
    >
      <h1>Some Header Here</h1>
      <small className={styled.time}> 15 haziran 2015 13:22 </small>
      <p className={styled.postText}>
        Some Post text here about somethingSome Post text here about
        somethingSome Post text here about somethingSome Post text here about
        somethingSome Post text here about somethingSome Post text here about
        somethingSome Post text here about somethingSome Post text here about
        somethingSome Post text here about something
      </p>
      {!isReplyInput && (
        <p
          className={styled.replyButton}
          onClick={() => {
            setIsReplyInput(true);
          }}
        >
          Reply
        </p>
      )}
      {isReplyInput && (
        <CommentInput
          value={inputValue}
          onKeyPress={keyHandler}
          onChange={changeHandler}
          commenttype="postComment"
        />
      )}
    </div>
  );
}

export default Post;
