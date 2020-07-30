'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Order Items Controller
const orderItemsController = require(path.join(__dirname, '../controllers/order/orderItemsController'))

route.post('/', [checkAuth,scopesValidation(['create:orders'])], orderItemsController.store)
route.get('/',  [checkAuth,scopesValidation(['show:orders'])],orderItemsController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:orders'])], orderItemsController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:orders'])], orderItemsController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:orders'])], orderItemsController.update)

module.exports = route