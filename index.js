const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(cors())

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
