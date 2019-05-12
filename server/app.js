const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const todos = require("./routes/todos");

const app = express();

app.set("port", process.env.PORT || "3001");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/todos", todos);

mongoose.connect("mongodb://localhost/demo", { useNewUrlParser: true });

module.exports = app;
