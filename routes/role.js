'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Role Controller
const roleController = require(path.join(__dirname, '../controllers/role/roleController'))

route.post('/', [checkAuth,scopesValidation(['create:roles'])], roleController.store)

route.get('/',  [checkAuth,scopesValidation(['show:roles'])],roleController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:roles'])], roleController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:roles'])], roleController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:roles'])], roleController.update)

module.exports = route