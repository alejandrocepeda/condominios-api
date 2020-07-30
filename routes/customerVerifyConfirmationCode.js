'use strict'

const route = require('express').Router()
const path = require('path')
//const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// Verify Confirmation Code
const verifyConfirmationCodeController = require(path.join(__dirname, '../controllers/customers/verifyConfirmationCodeController'))
route.post('/', verifyConfirmationCodeController.store)

module.exports = route