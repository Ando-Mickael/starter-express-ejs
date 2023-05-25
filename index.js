require('dotenv').config()
// imports
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const indexRouter = require('./route')

// variables
const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3000

// config
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
app.use('/', indexRouter)

// server
app.listen(SERVER_PORT, () => console.log(`\n> http://localhost:${SERVER_PORT}`))