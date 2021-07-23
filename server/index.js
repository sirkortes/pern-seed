const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/todos', require('./routes/todos'))

// connect app
app.listen(PORT, () => console.log(`server has started on port: ${PORT}`))
