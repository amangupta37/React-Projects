import React from "react";

const TodoCard = ({ text }) => {
  return (
    <div className="todo-card">
      <div className="todo-name">
        <h2>{text}</h2>
      </div>
      <div className="operations">
        <div className="delete">
          <button id="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
