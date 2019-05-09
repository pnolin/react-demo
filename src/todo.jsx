import React from "react";

const Todo = props => {
  return <div className="todo">{props.todo.name}</div>;
};

export default Todo;
