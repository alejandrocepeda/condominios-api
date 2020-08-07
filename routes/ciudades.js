'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const ciudadesController = require(path.join(__dirname, '../controllers/ciudades/ciudadesController'))

route.post('/', [checkAuth], ciudadesController.store)

route.get('/',  [checkAuth], ciudadesController.index)
route.get('/:id', [checkAuth], ciudadesController.show)

route.delete('/:id', [checkAuth], ciudadesController.destroy)
route.put('/:id', [checkAuth], ciudadesController.update)

module.exports = route