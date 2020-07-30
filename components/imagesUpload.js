const { config } = require('../config')
const path = require('path')
const uuid = require('uuid-random');

async function upload(req,image,name) {
 
  return new Promise((resolve,reject) => {

    try {

      const mediaSource = req.files[image]     
      const _extension = path.extname(req.files[image].name)
      const _random_id = uuid()

      const mediaDestination = path.join(config.publicPath, `/images/${name}-${_random_id}${_extension}`)
      const file_url = `${config.imagesUrl}/${name}-${_random_id}${_extension}`

      mediaSource.mv(mediaDestination).then((err) => {
        if (err) {
          return reject(err)
        }
        
        return resolve(file_url)
      })

    } catch (error) {
        return reject(error)
    }
  })
}
  
module.exports = {  
  upload
}