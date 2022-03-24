const express = require('express')
const app = express()
const mongoose =require('mongoose')
// const {MONGOURI} = require('./keys')
const PORT = 7000;

// require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

// mongoose.connect(MONGOURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on('connected', () => {
//     console.log("DB is connected")
// })

// mongoose.connection.on('error', (err) => {
//     console.log("DB not connected ", err)
// })

app.get('/', (req,res) => {
    res.send("Working");
})

app.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})
