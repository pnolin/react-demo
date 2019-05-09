import React from "react";
import Todo from "./todo";

const TodosDisplayer = props => {
  return (
    <div>
      <div id="todo-displayer-title">
        <span>
          {props.todos.length > 0
            ? "List of things to do"
            : "You have nothing to do!"}
        </span>
      </div>
      <div id="todos-wrapper">
        {props.todos.map((todo, index) => (
          <Todo
            className={index % 2 === 0 ? "even-row" : "odd-row"}
            key={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosDisplayer;
