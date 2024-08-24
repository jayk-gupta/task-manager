const express = require("express")
const router = express.Router()
const taskController = require("../controllers/TaskController")
const { jwtAuthMiddleware } = require("../jwt")

router.get("/",jwtAuthMiddleware,taskController.getAllTasks)
router.get("/:id",taskController.getTaskById)

router.put("/:id",taskController.updateTask)

router.post("/", jwtAuthMiddleware, taskController.createTask);
router.delete("/:id", taskController.deleteTask)

// router.delete("/")

module.exports = router