const connectToMongo = require('./dbConnect');
const express = require('express');
connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Salman!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})