'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const conjuntosController = require(path.join(__dirname, '../controllers/conjuntos/conjuntosController'))

route.post('/', [checkAuth], conjuntosController.store)

route.get('/',  [checkAuth], conjuntosController.index)
route.get('/:id', [checkAuth], conjuntosController.show)

route.delete('/:id', [checkAuth], conjuntosController.destroy)
route.put('/:id', [checkAuth], conjuntosController.update)

module.exports = route