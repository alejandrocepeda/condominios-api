'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Opening Controller
const openingController = require(path.join(__dirname, '../controllers/opening/openingController'))

route.post('/', [checkAuth,scopesValidation(['create:openings'])], openingController.store)

route.get('/',  [checkAuth,scopesValidation(['show:openings'])], openingController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:openings'])], openingController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:openings'])], openingController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:openings'])], openingController.update)

module.exports = route