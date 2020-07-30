const sgMail = require('@sendgrid/mail')
const { config } = require('../../config/index')
const path = require('path')
const fs = require('fs')

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

function read (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, content) => {
      if (err) reject(err)

      resolve(content)
    })
  })
}

async function send (options) {
  if (options.templateName) {
    const templateName = path.join(path.resolve('./plugins/sendgrid/templates/'), 'welcome.html')

    try {
      options.html = await read(templateName)
      sgMail.setApiKey(config.sendGridApiKey)
      sgMail.send(options)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  send
}
