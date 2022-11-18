import React, { useState } from "react";
import PickUserNameCSS from "./PickUserName.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Redux/ui-slice";
function PickUserName() {
  const styled = PickUserNameCSS;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const keyHandler = (e) => {
    if (e.key === "Enter" && inputValue !== "" && inputValue.length > 3) {
      dispatch(uiActions.assignUserName(inputValue));
    }
  };

  return (
    <div className={styled.PickUserNameContainer}>
      <label>You Should Type an Username First.</label>
      <input
        value={inputValue}
        type="text"
        onChange={changeHandler}
        onKeyPress={keyHandler}
      />
    </div>
  );
}

export default PickUserName;
