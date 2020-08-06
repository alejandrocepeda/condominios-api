'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const residentesController = require(path.join(__dirname, '../controllers/residentes/residentesController'))

route.post('/', [checkAuth,scopesValidation(['create:residentes'])], residentesController.store)

route.get('/',  [checkAuth,scopesValidation(['show:residentes'])], residentesController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:residentes'])], residentesController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:residentes'])], residentesController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:residentes'])], residentesController.update)

module.exports = route