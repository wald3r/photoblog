const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    id: Number,
    text: String,
    date: Date,
    photos: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo' 
        }
    ]

})

module.exports = mongoose.model('Blog', blogSchema)