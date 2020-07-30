'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// ReasonsDeclineOrder Controller
const ReasonsDeclineOrdersController = require(path.join(__dirname, '../controllers/reasonsDeclineOrders/reasonsDeclineOrdersController'))

route.post('/', [checkAuth,scopesValidation(['create:reasonsdeclineorders'])], ReasonsDeclineOrdersController.store)
route.get('/',  [checkAuth,scopesValidation(['show:reasonsdeclineorders'])],ReasonsDeclineOrdersController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:reasonsdeclineorders'])], ReasonsDeclineOrdersController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:reasonsdeclineorders'])], ReasonsDeclineOrdersController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:reasonsdeclineorders'])], ReasonsDeclineOrdersController.update)

module.exports = route