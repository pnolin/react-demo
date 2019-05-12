const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.PORT || "3001");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
