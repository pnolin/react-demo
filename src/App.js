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
        <TodosDisplayer
          todos={this.state.todos}
          onDelete={this.deleteTodo}
          onCheck={this.toggleTodoCompletion}
        />
      </div>
    );
  };

  addTodo = name => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name, done: false, id: this.state.todos.length }
      ]
    });
  };

  toggleTodoCompletion = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return { ...todo };
    });

    this.setState({ todos });
  };

  deleteTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };
}

export default App;
