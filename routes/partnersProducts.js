'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Products Controller
const partnerProductsController = require(path.join(__dirname, '../controllers/partner/partnerProductsController'))

route.get('/:id', [checkAuth,scopesValidation(['show:partners-products'])], partnerProductsController.index)

module.exports = route