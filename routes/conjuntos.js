'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const conjuntosController = require(path.join(__dirname, '../controllers/conjuntos/conjuntosController'))

route.post('/', [checkAuth,scopesValidation(['create:conjuntos'])], conjuntosController.store)

route.get('/',  [checkAuth,scopesValidation(['show:conjuntos'])], conjuntosController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:conjuntos'])], conjuntosController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:conjuntos'])], conjuntosController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:conjuntos'])], conjuntosController.update)

module.exports = route