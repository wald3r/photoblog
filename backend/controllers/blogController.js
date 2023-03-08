const blogrouter = require('express').Router()
const Blog = require('../models/blog')


blogrouter.get('/', async (request, response, next) => {

    try {
        const blogs = await Blog.find({}).populate("photo")
        return response.json(blogs)
    }catch(exception){
        next(exception)
    }
})


module.exports = blogrouter