import React from "react";

class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render = () => {
    return (
      <div id="todo-adder">
        <form>
          <label htmlFor="todo-name">Name: </label>
          <input
            name="todo-name"
            id="todo-name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <button
            onClick={this.addTodo}
            disabled={this.state.name.length === 0}
          >
            Add
          </button>
        </form>
      </div>
    );
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: "" });
  };
}

export default TodoAdder;
