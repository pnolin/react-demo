const mongoose = require("mongoose");
const TodoSchema = require("../entities/todo");

const getTodos = (req, res) => {
  const Todo = mongoose.model("Todo", TodoSchema);
  Todo.find({}, (err, arr) => {
    if (err) {
      res.status(500).send({});
    } else {
      res.status(201).send(arr);
    }
  });
};

const addTodo = (req, res) => {
  const Todo = mongoose.model("Todo", TodoSchema);

  const todo = new Todo({ name: req.body.name, done: req.body.done });
  todo.save(err => {
    if (err) {
      res.status(500).send({});
    } else {
      res.status(201).send({});
    }
  });
};

module.exports = { getTodos, addTodo };
