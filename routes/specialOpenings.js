'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Opening Controller
const specialOpeningController = require(path.join(__dirname, '../controllers/specialOpening/specialOpeningController'))

route.post('/', [checkAuth,scopesValidation(['create:openings'])], specialOpeningController.store)

route.get('/',  [checkAuth,scopesValidation(['show:openings'])], specialOpeningController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:openings'])], specialOpeningController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:openings'])], specialOpeningController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:openings'])], specialOpeningController.update)

module.exports = route