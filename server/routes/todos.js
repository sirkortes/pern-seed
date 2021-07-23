const express = require('express')
const router = express.Router()
const todos = require('../controllers/todos')

// create a todo
router.post('/', todos.create)
// get all todos
router.get('/', todos.getAll)
// get a todo
router.get('/:id', todos.get)
// update a todo
router.put('/:id', todos.update)
// delete a todo
router.delete('/:id', todos.delete)

module.exports = router
