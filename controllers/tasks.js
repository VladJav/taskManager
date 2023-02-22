const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('all items');
};

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch (e){
        res.status(500).json({message: e.message});
    }
};

const getTask = (req, res) => {
    res.send('get item');
};

const updateTask = (req, res) => {
    res.send('update items');
};

const deleteTask = (req, res) => {
    res.send('delete items');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};