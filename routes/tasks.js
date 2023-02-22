const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, deleteTask, updateTask, getTask } = require('../controllers/tasks');

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;