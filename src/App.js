import React from "react";
import "./App.css";
import TodoAdder from "./todo-adder";
import TodosDisplayer from "./todos-displayer";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render = () => {
    return (
      <div className="App">
        <TodoAdder addTodo={this.addTodo} />
        <TodosDisplayer todos={this.state.todos} />
      </div>
    );
  };

  addTodo = name => {
    this.setState({ todos: [...this.state.todos, { name }] });
  };
}

export default App;
