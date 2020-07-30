'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Controller
const partnerController = require(path.join(__dirname, '../controllers/partner/partnerController'))

route.post('/', [checkAuth,scopesValidation(['create:partners'])], partnerController.store)

route.get('/',  [checkAuth,scopesValidation(['show:partners'])], partnerController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:partners'])], partnerController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:partners'])], partnerController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:partners'])], partnerController.update)

module.exports = route