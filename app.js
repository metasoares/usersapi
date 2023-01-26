const express = require('express')
const path = require('path')
const { users }  = require('./data')
const PORT = process.env.PORT || 5020

const https = require('https')
const fs = require('fs')



const app = express()

//Static page
app.use(express.static('./access'))

//
app.use(express.urlencoded({extended: true}))

//Home Page
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'./access/index.html'))
})

app.get('/users',(req,res) => {
   res.status(200).json(users)
})

//params
app.get("/users/:id", (req,res) => {
    //params
    const { id } = req.params
    //Find params
    const user = users.find((user) => user.id === Number(id))
    if(user){
        res.status(200).json(user)
    }
    else {
        res.status(400).send(`No user found with the id:${id} `)
    }
})

//query
app.get('/user',(req, res) => {
    const { name} = req.query

    //find name
    const userName = users.find((user) => user.name === name)
    if(name){
        res.status(200).json(userName)
    }
    else if(name == ''){
        res.status(400).json({ success: false, mensagen: 'It is missing name. Insert it'})
    }
    else {
        res.status(400).json({success:false, mensagen:`No user found with the name: ${name}`})
    }
})



const options = {
    cert: fs.readFileSync('./config/cert.crt'),
    key: fs.readFileSync('./config/cert.key')
}

https.createServer(options, app).listen(PORT,() =>console.log(`https://usersapi.vercel.app`))

// app.listen(() => console.log(`https://usersapi.vercel.app/users`))