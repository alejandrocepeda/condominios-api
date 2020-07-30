'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Aditionals Controller
const aditionalsController = require(path.join(__dirname, '../controllers/aditional/aditionalController'))

route.post('/', [checkAuth,scopesValidation(['create:aditionals'])], aditionalsController.store)
route.get('/',  [checkAuth,scopesValidation(['show:aditionals'])],aditionalsController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:aditionals'])], aditionalsController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:aditionals'])], aditionalsController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:aditionals'])], aditionalsController.update)

module.exports = route