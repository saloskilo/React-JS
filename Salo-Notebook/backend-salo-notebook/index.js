const connectToMongo = require('./dbConnect');
const express = require('express');
connectToMongo();
const app = express()
const port = 3000


app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello Salman!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})