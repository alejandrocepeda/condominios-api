'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const novedadesFaltasController = require(path.join(__dirname, '../controllers/novedadesFaltas/novedadesFaltasController'))

route.post('/', [checkAuth], novedadesFaltasController.store)
route.get('/',  [checkAuth],novedadesFaltasController.index)
route.get('/:id', [checkAuth], novedadesFaltasController.show)

route.delete('/:id', [checkAuth], novedadesFaltasController.destroy)
route.put('/:id', [checkAuth], novedadesFaltasController.update)

module.exports = route