const express = require('express')
const app = express()
var port = process.env.PORT || 3000;
const cors = require('cors')

const Piadas = require('./data/piadas')

app.use(cors())
app.get('/', (req, res) => {
    let number = Math.floor(Math.random() * Piadas.length);
    res.json(Piadas[number])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})