import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const useCommentActions = () => {
  const [isReplyInput, setIsReplyInput] = useState(false);
  const [showSubComments, setShowSubComments] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [subComments, setSubComments] = useState([]);
  const [vote, setVote] = useState("");
  const username = useSelector((state) => state.ui.username);
  const date = new Date();
  const changeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const keyHandler = (e) => {
    if (e.key === "Enter" && inputValue.trim().length > 5) {
      setSubComments([
        ...subComments,
        {
          username: username,
          comment: inputValue,
          time: date.toLocaleString(),
          vote: 0,
        },
      ]);
      setInputValue("");
    }
  };
  const voteHandler = (e) => {
    if (e.currentTarget.id === "upArrow") {
      vote === "up" ? setVote("") : setVote("up");
    } else {
      vote === "down" ? setVote("") : setVote("down");
    }
  };
  const subCommentSwitch = () => {
    setShowSubComments(!showSubComments);
  };
  const replyInputSwitch = (bool) => {
    setIsReplyInput(bool);
  };
  return {
    isReplyInput: isReplyInput,
    showSubComments: showSubComments,
    inputValue: inputValue,
    subComments: subComments,
    vote: vote,
    username: username,
    changeHandler: changeHandler,
    keyHandler: keyHandler,
    voteHandler: voteHandler,
    subCommentSwitch: subCommentSwitch,
    replyInputSwitch: replyInputSwitch,
  };
};
