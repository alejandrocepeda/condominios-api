'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const ubicacionApartamentosController = require(path.join(__dirname, '../controllers/ubicacionApartamentos/ubicacionApartamentosController'))

route.post('/', [checkAuth], ubicacionApartamentosController.store)
route.get('/',  [checkAuth],ubicacionApartamentosController.index)
route.get('/:id', [checkAuth], ubicacionApartamentosController.show)

route.delete('/:id', [checkAuth], ubicacionApartamentosController.destroy)
route.put('/:id', [checkAuth], ubicacionApartamentosController.update)

module.exports = route