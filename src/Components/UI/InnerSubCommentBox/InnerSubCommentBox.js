import React from "react";
import InnerSubCommentBoxCSS from "./InnerSubCommentBox.module.css";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { useCommentActions } from "../../../Hooks/hooks";

function InnerSubCommentBox(props) {
  const styled = InnerSubCommentBoxCSS;
  const commentActions = useCommentActions();
  return (
    <div
      onBlur={() => {
        commentActions.replyInputSwitch(false);
      }}
      className={styled.CommentBoxContainer}
    >
      <div className={styled.CommentBoxContent}>
        <div className={styled.authorAndTime}>
          <h4 className={styled.userName}>{props.comment.username}</h4>
          <small className={styled.time}>{props.comment.time}</small>
        </div>
        <p className={styled.comment}>{props.comment.comment}</p>
        <div className={styled.CommentBoxFooter}>
          <div className={styled.voteBox} votestatus={commentActions.vote}>
            <TbArrowBigTop
              onClick={commentActions.voteHandler}
              id="upArrow"
              className={styled.icon}
            />
            <TbArrowBigDown
              onClick={commentActions.voteHandler}
              id="downArrow"
              className={styled.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerSubCommentBox;
