const express = require("express")
const router = express.Router()
const taskController = require("../controllers/TaskController")

router.get("/",taskController.getAllTasks)
router.get("/:id",taskController.getTaskById)

router.put("/:id",taskController.updateTask)

router.post("/",taskController.createTask)
router.delete("/:id", taskController.deleteTask)

// router.delete("/")

module.exports = router