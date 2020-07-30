'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Orders History Controller
const partnerOrdersHistoryController = require(path.join(__dirname, '../controllers/partner/partnerOrdersHistoryController'))

route.get('/:id',  [checkAuth,scopesValidation(['show:orders'])],partnerOrdersHistoryController.index)

module.exports = route