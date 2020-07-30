'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// Send Confirmation Code
const googleDirectionsController = require(path.join(__dirname, '../controllers/google/directionsController'))
route.get('/:coordinates',checkAuth, googleDirectionsController.index)

module.exports = route