'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Customers Controller
const customersController = require(path.join(__dirname, '../controllers/customers/customersController'))

route.post('/', [checkAuth,scopesValidation(['create:customers'])], customersController.store)
route.get('/',  [checkAuth,scopesValidation(['show:customers'])],customersController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:customers'])], customersController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:customers'])], customersController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:customers'])], customersController.update)

module.exports = route