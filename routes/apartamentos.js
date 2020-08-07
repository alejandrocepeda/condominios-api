'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const apartamentosController = require(path.join(__dirname, '../controllers/apartamentos/apartamentosController'))

route.post('/', [checkAuth], apartamentosController.store)

route.get('/',  [checkAuth], apartamentosController.index)
route.get('/:id', [checkAuth], apartamentosController.show)

route.delete('/:id', [checkAuth], apartamentosController.destroy)
route.put('/:id', [checkAuth], apartamentosController.update)

module.exports = route