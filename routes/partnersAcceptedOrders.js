'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

const orderController = require(path.join(__dirname, '../controllers/partner/acceptedOrdersController'))

route.get('/:id',  [checkAuth,scopesValidation(['show:orders'])],orderController.index)

module.exports = route