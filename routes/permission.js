'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Permission Controller
const permissionController = require(path.join(__dirname, '../controllers/permission/permissionController'))

route.post('/', [checkAuth,scopesValidation(['create:permissions'])], permissionController.store)
route.get('/',  [checkAuth,scopesValidation(['show:permissions'])],permissionController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:permissions'])], permissionController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:permissions'])], permissionController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:permissions'])], permissionController.update)

module.exports = route