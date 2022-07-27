const express = require('express')
const { body } = require('express-validator')
const crudController = require('../controllers/crud')
const router = express.Router()

router.get('/api/todos', crudController.getTodos)

router.get('/api/todos/:tid', crudController.getTodo)

router.post('/api/todos', [
    body('name',"Provide a valid name")
        .isLength({ min: 2})
        .trim(),
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.postTodo)

router.put('/api/todos/:tid', [
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.putTodo)

router.delete('/api/todos/:tid', crudController.deleteTodo)

module.exports = router
