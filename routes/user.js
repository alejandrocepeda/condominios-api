'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// User Controller
const userController = require(path.join(__dirname, '../controllers/user/userController'))

route.post('/register', userController.store)

route.get('/',  [checkAuth,scopesValidation(['show:users'])], userController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:users'])], userController.show)
route.delete('/:id', [checkAuth,scopesValidation(['destroy:users'])], userController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:users'])], userController.update)

module.exports = route