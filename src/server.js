const express = require('express')
const app = express()
// const port = 3000
const cors = require('cors')

const Piadas = require('./data/piadas')

app.use(cors())
app.get('/', (req, res) => {
    let number = Math.floor(Math.random() * Piadas.length);
    res.json(Piadas[number])
})