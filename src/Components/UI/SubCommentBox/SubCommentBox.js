import React from "react";
import SubCommentBoxCSS from "./SubCommentBox.module.css";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { useCommentActions } from "../../../Hooks/hooks";
import CommentInput from "../CommentInput/CommentInput";
import InnerSubCommentBox from "../InnerSubCommentBox/InnerSubCommentBox";

function SubCommentBox(props) {
  const styled = SubCommentBoxCSS;
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
            {!commentActions.isReplyInput && (
              <p
                className={styled.replyButton}
                onClick={() => {
                  commentActions.replyInputSwitch(true);
                }}
              >
                Reply
              </p>
            )}
            {commentActions.isReplyInput && (
              <CommentInput
                value={commentActions.inputValue}
                onKeyPress={commentActions.keyHandler}
                onChange={commentActions.changeHandler}
                commenttype="subComment"
              />
            )}
          </div>
          <div>
            {commentActions.subComments.length > 0 && (
              <button
                onClick={commentActions.subCommentSwitch}
                className={styled.showButton}
              >
                {commentActions.showSubComments ? "Hide" : "Show"} all replies
              </button>
            )}
          </div>
        </div>
      </div>

      {commentActions.showSubComments && (
        <div>
          {commentActions.subComments.map((comment) => {
            return <InnerSubCommentBox comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SubCommentBox;
