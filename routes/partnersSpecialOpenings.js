'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Partner Opening Controller
const partnerSpecialOpeningController = require(path.join(__dirname, '../controllers/partner/partnerSpecialOpeningController'))

route.get('/:id', [checkAuth,scopesValidation(['show:partners-openings'])], partnerSpecialOpeningController.index)

module.exports = route