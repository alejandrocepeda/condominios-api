'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const casosController = require(path.join(__dirname, '../controllers/casos/casosController'))

route.post('/', [checkAuth], casosController.store)
route.get('/',  [checkAuth],casosController.index)
route.get('/:id', [checkAuth], casosController.show)

route.delete('/:id', [checkAuth], casosController.destroy)
route.put('/:id', [checkAuth], casosController.update)

module.exports = route