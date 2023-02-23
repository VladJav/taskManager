const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    }
    catch (e){
        res.status(500).json({ message: e.message });
    }
};

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch (e){
        res.status(500).json({ message: e.message });
    }
};

const getTask = async (req, res) => {
    try{
        const { id: taskId } = req.params;
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({ message: `No task with id : ${taskId}`});
        }
        res.status(200).json({ task });
    }
    catch (e){
        res.status(500).json({ message: e.message });
    }
};

const updateTask = async (req, res) => {
    try{
        const { id: taskId } = req.params;

        const task = await Task.findByIdAndUpdate(taskId, req.body, {
            new: true,
            runValidators: true,
        });

        if(!task){
            return res.status(404).json({ message: `No task with id : ${taskId}`});
        }

        res.status(200).json({ task });
    }
    catch (e){
        res.status(500).json({ message: e.message });
    }
};

const deleteTask = async (req, res) => {
    try{
        const {id: taskId} = req.params;
        const task = await Task.findByIdAndDelete(taskId);
        if(!task){
            return res.status(404).json({ message: `No task with id : ${taskId}`});
        }
        res.status(200).json({task});
    }
    catch (e){
        res.status(500).json({ message: e.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};