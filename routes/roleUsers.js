'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Role Users Controller
const roleUsersController = require(path.join(__dirname, '../controllers/role/roleUserController'))

route.post('/', [checkAuth,scopesValidation(['create:role-users'])], roleUsersController.store)

route.get('/',  [checkAuth,scopesValidation(['show:role-users'])],roleUsersController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:role-users'])], roleUsersController.show)

route.delete('/:id', [checkAuth,scopesValidation(['detroy:role-users'])], roleUsersController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:role-users'])], roleUsersController.update)

module.exports = route