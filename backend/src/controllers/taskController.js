const Task = require("../models/Tasks");

// Crear una nueva tarea
exports.createTask = async (req, res) => {
    try {
        const task = new Task({ ...req.body, user: req.user.id });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea" });
    }
};

// Obtener todas las tareas del usuario autenticado
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas" });
    }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea" });
    }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea" });
    }
};
