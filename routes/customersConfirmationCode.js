'use strict'

const route = require('express').Router()
const path = require('path')
//const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// Send Confirmation Code
const confirmationCodeController = require(path.join(__dirname, '../controllers/customers/confirmationCodeController'))
route.post('/', confirmationCodeController.store)

module.exports = route