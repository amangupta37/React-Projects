import React from "react";
import TodoCard from "./sub_components/TodoCard";

const Todo = () => {
  return (
    <div className="todo">
      <TodoCard text="Complete React now 🔥 " />

      <TodoCard text="Complete JS now 🔥 " />

      <TodoCard text="Complete CSS3 now 🔥 " />
    </div>
  );
};

export default Todo;
