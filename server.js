const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./models')

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend 🍑'})
})

app.listen(port, () => {
    console.log(`Listening to the smooth sounds of ${port}`)
})
