const gm = require('gm').subClass({imageMagick: true})
const chalk = require('chalk')

async function quality(file,quality){
    gm(file)
    .quality(quality)
    .write(file, (err) => {
        if (!err) return `Image ${file} is optimized`
    })
}

module.exports = {
    quality
}