'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

const deliveredOrdersController = require(path.join(__dirname, '../controllers/distributors/deliveredOrdersController'))

route.get('/:id',  [checkAuth,scopesValidation(['show:orders'])],deliveredOrdersController.index)

module.exports = route