const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    id: Number,
    url: String,
    caption: String,
    width: Number,
    height: Number,
    date: Date
})

module.exports = mongoose.model('Photo', photoSchema)