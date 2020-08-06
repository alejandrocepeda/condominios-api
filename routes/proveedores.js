'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const proveedoresController = require(path.join(__dirname, '../controllers/proveedores/proveedoresController'))

route.post('/', [checkAuth], proveedoresController.store)

route.get('/',  [checkAuth], proveedoresController.index)
route.get('/:id', [checkAuth], proveedoresController.show)

route.delete('/:id', [checkAuth], proveedoresController.destroy)
route.put('/:id', [checkAuth], proveedoresController.update)

module.exports = route