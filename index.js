const express = require('express')
const app = express()
const mongoose =require('mongoose')
require('dotenv').config()
const PORT = 7000;

const MONGOURI = process.env.DB_URI

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("DB is connected")
})

mongoose.connection.on('error', (err) => {
    console.log("DB not connected ", err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})
