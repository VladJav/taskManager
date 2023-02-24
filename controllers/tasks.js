const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const CustomAPIError = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    res.status(200).json({ tasks, amount: tasks.length });

});

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json(task);

});

const getTask = asyncWrapper(async (req, res, next) => {

    const { id: taskId } = req.params;
    const task = await Task.findById(taskId);
    if(!task){
        return next(new CustomAPIError(`No task with id : ${taskId}`, 404));
    }
    res.status(200).json({ task });

});

const updateTask = asyncWrapper(async (req, res, next) => {

    const { id: taskId } = req.params;

    const task = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true,
        runValidators: true,
    });

    if(!task){
        return next(new CustomAPIError(`No task with id : ${taskId}`, 404));
    }

    res.status(200).json({ task });

});

const deleteTask = asyncWrapper(async (req, res, next) => {

    const {id: taskId} = req.params;
    const task = await Task.findByIdAndDelete(taskId);
    if(!task){
        return next(new CustomAPIError(`No task with id : ${taskId}`, 404));
    }
    res.status(200).json({ task });

});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};