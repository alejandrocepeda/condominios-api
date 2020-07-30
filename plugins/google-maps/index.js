const axios = require('axios')

async function direction (coordinates) {

    try {
        const googleApiKey = 'AIzaSyAMGWGIGF38DgseweL4vKcSUXb0tBrYk3A'        
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${coordinates}&destination=${coordinates}&sensor=false&mode=driving&key=${googleApiKey}`
        const routes = await axios.get(url)

        return routes.data
    }
    catch (error){
        return error
    }
}

async function directions (origin,destination) {

    try {
        const googleApiKey = 'AIzaSyAMGWGIGF38DgseweL4vKcSUXb0tBrYk3A'        
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&sensor=false&mode=driving&key=${googleApiKey}`
        const routes = await axios.get(url)
        
       

        return routes.data
    }
    catch (error){
        return error
    }
}

module.exports = {
    directions,
    direction
}