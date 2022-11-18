import React from "react";
import CommentsSectionCSS from "./CommentsSection.module.css";
import { useSelector } from "react-redux";
import CommentBox from "../UI/CommentBox/CommentBox";
function CommentsSection() {
  const styled = CommentsSectionCSS;
  const parentComments = useSelector(
    (state) => state.userComment.parentComments
  );
  console.log(parentComments);
  return (
    <div className={styled.CommentsSectionContainer}>
      {parentComments.length === 0 && (
        <p className={styled.noComments}>No Comments Here.</p>
      )}
      {parentComments.length > 0 &&
        parentComments.map((comment) => <CommentBox comment={comment} />)}
    </div>
  );
}

export default CommentsSection;
