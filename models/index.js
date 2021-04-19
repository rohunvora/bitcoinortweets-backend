require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (error) => {
    console.log(`Database error\n${error}`)
})
