'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const correspondenciasController = require(path.join(__dirname, '../controllers/correspondencias/correspondenciasController'))

route.post('/', [checkAuth], correspondenciasController.store)

route.get('/',  [checkAuth], correspondenciasController.index)
route.get('/:id', [checkAuth], correspondenciasController.show)

route.delete('/:id', [checkAuth], correspondenciasController.destroy)
route.put('/:id', [checkAuth], correspondenciasController.update)

module.exports = route