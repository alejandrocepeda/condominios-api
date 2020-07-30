'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Distributors Controller
const distributorsController = require(path.join(__dirname, '../controllers/distributors/distributorsController'))

route.post('/', [checkAuth,scopesValidation(['create:distributors'])], distributorsController.store)
route.get('/',  [checkAuth,scopesValidation(['show:distributors'])],distributorsController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:distributors'])], distributorsController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:distributors'])], distributorsController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:distributors'])], distributorsController.update)


module.exports = route