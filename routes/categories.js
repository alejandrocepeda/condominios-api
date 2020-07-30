'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Categoriers Controller
const categoriesController = require(path.join(__dirname, '../controllers/categories/categoriesController'))

route.post('/', [checkAuth,scopesValidation(['create:categories'])], categoriesController.store)
route.get('/',  [checkAuth,scopesValidation(['show:categories'])],categoriesController.index)
route.get('/:id', [checkAuth,scopesValidation(['show:categories'])], categoriesController.show)

route.delete('/:id', [checkAuth,scopesValidation(['destroy:categories'])], categoriesController.destroy)
route.put('/:id', [checkAuth,scopesValidation(['update:categories'])], categoriesController.update)

module.exports = route