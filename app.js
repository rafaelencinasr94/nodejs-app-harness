const express = require('express')
const app = express()
const port = 8080
const host = process.env.HOST || '0.0.0.0'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, host, () => {
  console.log(`App running on http://${host}:${port}`)
})
