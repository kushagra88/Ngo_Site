const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')
const { mongo } = require('mongoose')


//for port
const PORT = process.env.port || 3000

//monodb database connection
mongoose.connect("mongodb://localhost:27017/NGO_Site")
    .then(() => console.log("database connected successfully....:)"))
    .catch((err) => console.log("database connection failed....:)",err));

//assets we use'use' to use the data
app.use(express.static('./src/assests'));
app.use(express.json({}))
app.use(express.urlencoded({extended: false }))

//view engine
app.set('views',path.join(__dirname,'/src/views'))
app.set('view engine','ejs')

//setting up routes
require('./src/routes/web')(app)


//server
app.listen(PORT, ()=>{
    console.log('Server is listening on port',PORT,'Happy coding.......:)')
})