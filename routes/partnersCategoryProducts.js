'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

const partnersCategoryProductsController = require(path.join(__dirname, '../controllers/partner/partnersCategoryProductsController'))

route.get('/:partner/:category',  [checkAuth,scopesValidation(['show:products'])],partnersCategoryProductsController.index)

module.exports = route