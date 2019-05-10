import React from "react";
import Todo from "./todo";

const TodosDisplayer = props => {
  const message =
    props.todos.length === 0
      ? "You have nothing to do!"
      : props.todos.every(todo => todo.done)
      ? "You did everything!"
      : "List of things to do";

  return (
    <div>
      <div id="todo-displayer-title">
        <span>{message}</span>
      </div>
      <div id="todos-wrapper">
        {props.todos.map((todo, index) => (
          <Todo
            className={index % 2 === 0 ? "even-row" : "odd-row"}
            key={index}
            todo={todo}
            onDelete={props.onDelete}
            onCheck={props.onCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosDisplayer;
