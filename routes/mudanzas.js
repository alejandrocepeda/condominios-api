'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const mudanzasController = require(path.join(__dirname, '../controllers/mudanzas/mudanzasController'))

route.post('/', [checkAuth], mudanzasController.store)
route.get('/',  [checkAuth],mudanzasController.index)
route.get('/:id', [checkAuth], mudanzasController.show)

route.delete('/:id', [checkAuth], mudanzasController.destroy)
route.put('/:id', [checkAuth], mudanzasController.update)

module.exports = route