'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const paisesController = require(path.join(__dirname, '../controllers/paises/paisesController'))

route.post('/', [checkAuth], paisesController.store)

route.get('/',  [checkAuth], paisesController.index)
route.get('/:id', [checkAuth], paisesController.show)

route.delete('/:id', [checkAuth], paisesController.destroy)
route.put('/:id', [checkAuth], paisesController.update)

module.exports = route