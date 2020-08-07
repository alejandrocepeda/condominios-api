'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const visitantesController = require(path.join(__dirname, '../controllers/visitantes/visitantesController'))

route.post('/', [checkAuth], visitantesController.store)

route.get('/',  [checkAuth], visitantesController.index)
route.get('/:id', [checkAuth], visitantesController.show)

route.delete('/:id', [checkAuth], visitantesController.destroy)
route.put('/:id', [checkAuth], visitantesController.update)

module.exports = route