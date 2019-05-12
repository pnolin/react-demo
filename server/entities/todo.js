const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  done: Boolean
});

module.exports = todoSchema;
