//const axios = require('axios')

const { direction } = require('../../plugins/google-maps')

async function index (req, res, next) {

    try {
        const coordinates = req.params.coordinates
        const response = await direction(coordinates)
        
        return res.success(response['routes'][0]['legs'],200)
        
    }
    catch (error){
        next(error)
    }
}

module.exports = {
  index
}