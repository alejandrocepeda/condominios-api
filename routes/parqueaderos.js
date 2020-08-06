'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const parqueaderosController = require(path.join(__dirname, '../controllers/parqueaderos/parqueaderosController'))

route.post('/', [checkAuth], parqueaderosController.store)

route.get('/',  [checkAuth], parqueaderosController.index)
route.get('/:id', [checkAuth], parqueaderosController.show)

route.delete('/:id', [checkAuth], parqueaderosController.destroy)
route.put('/:id', [checkAuth], parqueaderosController.update)

module.exports = route