import React, { useState } from "react";
import Backdrop from "./Backdrop";
const TodoCard = (props) => {
  const [state, setstate] = useState(false);

  const deleteText = () => {
    setstate(true);
  };

  const cancle = () => {
    setstate(false);
  };

  return (
    <div className="todo-card">
      <div className="todo-name">
        <h2 id="todo-title">{props.text}</h2>
      </div>
      <div className="operations">
        <div className="delete">
          <button id="delete-btn" onClick={deleteText}>
            Delete
          </button>
        </div>
      </div>
      {state ? <Backdrop PassEvent={cancle} /> : null}
    </div>
  );
};

export default TodoCard;
