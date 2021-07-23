const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

// middleware
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`)
})
