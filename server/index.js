require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes

// create todo
// get all todos
// get a todo
// update a todo
// delete a todo

app.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`)
  console.log(`connected to db: ${pool.options.host}[${pool.options.port}]${pool.options.database}`)
})
