//importing requirement
/////////////////////////////////////////////////////
require('dotenv').config() //import to use .env file

const express = require('express')
const mongoose = require('mongoose')
const app = express()

//////////////////////////////////////////////////////

//Connecting to mongodb and comfim the connection and show the massage or show the error
// DATABASE_UR initialized in .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database!'))

// Setup the app and Router
app.use(express.json())
const subscriberasRouter = require()

// Listening to port 3000 to check server ran
app.listen(3000, () => console.log('Server Started on Port 3000'))