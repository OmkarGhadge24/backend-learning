const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const message = 'Hello from the test app'
  res.status(200).json({
    message,
  })
})

module.exports = app