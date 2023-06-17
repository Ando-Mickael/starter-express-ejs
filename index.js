// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const indexRouter = require('./route');

// variables
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());

// routes
app.use('/', indexRouter);

// server
app.listen(SERVER_PORT, () => console.log(`\n> http://localhost:${SERVER_PORT}`));