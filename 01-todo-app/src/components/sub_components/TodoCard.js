import React, { useState } from "react";
import Backdrop from "./Backdrop";
const TodoCard = (props) => {
  const [state, setstate] = useState(false);
  const [data, setData] = useState(props.text);

  const deleteText = () => {
    setstate(true);
  };

  const cancle = () => {
    setstate(false);
  };

  const confirm = () => {
    setstate(false);
    setData("");

    console.log("success");
  };

  return (
    <div className="todo-card">
      <div className="todo-name">
        <h2 id="todo-title">{data}</h2>
      </div>
      <div className="operations">
        <div className="delete">
          <button id="delete-btn" onClick={deleteText}>
            Delete
          </button>
        </div>
      </div>
      {state ? <Backdrop PassEvent={cancle} Confirm={confirm} /> : null}
    </div>
  );
};

export default TodoCard;
