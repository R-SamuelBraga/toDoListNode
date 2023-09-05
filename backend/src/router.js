const express = require("express");

const router = express.Router();

const taskController = require("./controllers/taskController");
const taskMiddleware = require("./middlewares/tasksMidleware");



router.get("/tasks", taskController.getAll);
router.post("/tasks", taskMiddleware.validateTitle,taskController.insert);
router.delete('/tasks/:id', taskController.deleteTask);
router.put("/tasks/:id", taskMiddleware.validateTitle,taskMiddleware.validateStatus,taskController.updateTask);

module.exports = router;
