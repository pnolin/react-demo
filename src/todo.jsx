import React from "react";

const Todo = props => {
  const handleChecked = event => {
    props.onCheck(props.todo.id);
  };

  const handleDeleteClick = event => {
    props.onDelete(props.todo.id);
  };

  return (
    <div className={`todo ${props.className}`}>
      <span>{props.todo.name}</span>
      <div>
        <input
          type="checkbox"
          name="completed"
          checked={props.todo.done}
          onChange={handleChecked}
        />
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
