'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const residentesController = require(path.join(__dirname, '../controllers/residentes/residentesController'))

route.post('/', [checkAuth], residentesController.store)

route.get('/',  [checkAuth], residentesController.index)
route.get('/:id', [checkAuth], residentesController.show)

route.delete('/:id', [checkAuth], residentesController.destroy)
route.put('/:id', [checkAuth], residentesController.update)

module.exports = route