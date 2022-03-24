const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
//const User = mongoose.model("User")
const bcrypt = require('bcryptjs')

router.get('/', (req,res) => {
    res.send("hello from auth")
})

router.post('/signup', (req,res) => {
    const {name, username, email, password} = req.body
    if(!email || !name || !password || !username){
        return res.status(422).json({error: "Please add all the fields"})
    }
    User.findone({emai: email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error: "Email already exist"})
        }
        User.findone({username: username})
        .then((savedName) => {
            if(savedName){
                return res.status(422).json({error: "Email already exist"})
            }
            bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    name,
                    username,
                    email,
                    password:hashedPassword
                })
        
                user.save()
                .then(user=>{
                    res.json({message: "Saved User"})
                })
                .catch(err => {
                    console.log(err)
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router