'use strict'

const path = require('path')
const route = require('express').Router()

route.use('/auth', require(path.join(__dirname, '/auth')))

route.use('/users', require(path.join(__dirname, '/user')))
route.use('/roles', require(path.join(__dirname, '/role')))
route.use('/roles-users', require(path.join(__dirname, '/roleUsers')))
route.use('/permissions', require(path.join(__dirname, '/permission')))


route.use('/parqueaderos', require(path.join(__dirname, '/parqueaderos')))
route.use('/conjuntos', require(path.join(__dirname, '/conjuntos')))
route.use('/residentes', require(path.join(__dirname, '/residentes')))
route.use('/correspondencias', require(path.join(__dirname, '/correspondencias')))
route.use('/proveedores', require(path.join(__dirname, '/proveedores')))
route.use('/apartamentos', require(path.join(__dirname, '/apartamentos')))
route.use('/visitantes', require(path.join(__dirname, '/visitantes')))



module.exports = route