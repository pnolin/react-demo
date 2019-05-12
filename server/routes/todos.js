const express = require("express");

const controller = require("../controllers/todosController");

const router = express.Router();

router.get("/", controller.getTodos);
router.post("/", controller.addTodo);

module.exports = router;
