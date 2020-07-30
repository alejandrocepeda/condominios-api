'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Statuses Controller
const partnerStatusesController = require(path.join(__dirname, '../controllers/partner/partnerStatusesController'))

route.post('/', [checkAuth,scopesValidation(['create:partners-statuses'])], partnerStatusesController.store)

route.get('/',  [checkAuth,scopesValidation(['show:partners-statuses'])], partnerStatusesController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:partners-statuses'])], partnerStatusesController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:partners-statuses'])], partnerStatusesController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:partners-statuses'])], partnerStatusesController.update)

module.exports = route