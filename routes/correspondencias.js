'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const correspondenciasController = require(path.join(__dirname, '../controllers/correspondencias/correspondenciasController'))

route.post('/', [checkAuth,scopesValidation(['create:correspondencias'])], correspondenciasController.store)

route.get('/',  [checkAuth,scopesValidation(['show:correspondencias'])], correspondenciasController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:correspondencias'])], correspondenciasController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:correspondencias'])], correspondenciasController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:correspondencias'])], correspondenciasController.update)

module.exports = route