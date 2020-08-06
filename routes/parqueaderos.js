'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const parqueaderosController = require(path.join(__dirname, '../controllers/parqueaderos/parqueaderosController'))

route.post('/', [checkAuth,scopesValidation(['create:parqueaderos'])], parqueaderosController.store)

route.get('/',  [checkAuth,scopesValidation(['show:parqueaderos'])], parqueaderosController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:parqueaderos'])], parqueaderosController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:parqueaderos'])], parqueaderosController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:parqueaderos'])], parqueaderosController.update)

module.exports = route