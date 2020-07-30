'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Products Controller
const productsController = require(path.join(__dirname, '../controllers/products/productsController'))

route.post('/', [checkAuth,scopesValidation(['create:products'])], productsController.store)

route.get('/',  [checkAuth,scopesValidation(['show:products'])], productsController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:products'])], productsController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:products'])], productsController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:products'])], productsController.update)

module.exports = route