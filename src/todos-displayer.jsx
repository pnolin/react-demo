import React from "react";
import Todo from "./todo";

const TodosDisplayer = props => {
  return (
    <div>
      <div>
        <span>
          {props.todos.length > 0
            ? "List of things to do:"
            : "You have nothing to do!"}
        </span>
      </div>
      <div>
        {props.todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodosDisplayer;
