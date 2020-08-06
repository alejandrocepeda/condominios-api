'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const proveedoresController = require(path.join(__dirname, '../controllers/proveedores/proveedoresController'))

route.post('/', [checkAuth,scopesValidation(['create:proveedores'])], proveedoresController.store)

route.get('/',  [checkAuth,scopesValidation(['show:proveedores'])], proveedoresController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:proveedores'])], proveedoresController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:proveedores'])], proveedoresController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:proveedores'])], proveedoresController.update)

module.exports = route