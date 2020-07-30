'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Permission Controller
const orderController = require(path.join(__dirname, '../controllers/order/orderController'))

route.post('/', [checkAuth,scopesValidation(['create:orders'])], orderController.store)
route.get('/',  [checkAuth,scopesValidation(['show:orders'])],orderController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:orders'])], orderController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:orders'])], orderController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:orders'])], orderController.update)

module.exports = route