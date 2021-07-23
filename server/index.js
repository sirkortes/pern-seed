require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Todos = require('./controllers/todos')

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// ROUTES
// create a todo
app.post('/todos', Todos.create)
// get all todos
app.get('/todos', Todos.getAll)
// get a todo
app.get('/todos/:id', Todos.get)
// update a todo
app.put('/todos/:id', Todos.update)
// delete a todo
app.delete('/todos/:id', Todos.delete)

// connect app
app.listen(PORT, () => console.log(`server has started on port: ${PORT}`))
