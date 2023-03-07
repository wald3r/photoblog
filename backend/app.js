const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const blogRouter = require('./controllers/blogController')
const cors = require('cors')
require('dotenv').config()


const url =
`mongodb+srv://photoblog:${process.env.DB_PW}@cluster0.jekihlg.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });



app.use(express.static('build'))
app.use(cors())
app.use(bodyparser.json())
app.use('/api/blogs', blogRouter)

module.exports = app