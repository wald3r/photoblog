const photoRouter = require('express').Router()
const Photo = require('../models/photo')


photoRouter.get('/', async (request, response, next) => {

    try {
        const photos = await Photo.find({})
        return response.json(photos)
    }catch(exception){
        next(exception)
    }
})


module.exports = photoRouter