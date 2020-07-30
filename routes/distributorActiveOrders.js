'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

const activeOrdersController = require(path.join(__dirname, '../controllers/distributors/activeOrdersController'))

route.get('/:id',  [checkAuth,scopesValidation(['show:orders'])],activeOrdersController.index)

module.exports = route