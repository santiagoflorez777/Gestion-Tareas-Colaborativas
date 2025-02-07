const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// Crear una tarea (requiere autenticación)
router.post("/", authMiddleware, createTask);

// Obtener todas las tareas del usuario autenticado
router.get("/", authMiddleware, getTasks);

// Actualizar una tarea
router.put("/:id", authMiddleware, updateTask);

// Eliminar una tarea
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;

