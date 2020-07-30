'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))
const scopesValidation = require(path.join(__dirname, '../middlewares/scopesValidation'))

// Image Products Controller
const imageProductsController = require(path.join(__dirname, '../controllers/imageProduct/imageProductController'))


const fileUpload = require('express-fileupload');

let fileUploadOptions = {
    limits: { fileSize: 900 * 1024 * 1024 }
}

route.post('/:id', [checkAuth,scopesValidation(['create:products'])],fileUpload(fileUploadOptions), imageProductsController.store)

module.exports = route