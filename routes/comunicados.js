'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const comunicadosController = require(path.join(__dirname, '../controllers/comunicados/comunicadosController'))

route.post('/', [checkAuth], comunicadosController.store)
route.get('/',  [checkAuth],comunicadosController.index)
route.get('/:id', [checkAuth], comunicadosController.show)

route.delete('/:id', [checkAuth], comunicadosController.destroy)
route.put('/:id', [checkAuth], comunicadosController.update)

module.exports = route