'use strict'

const path = require('path')
const route = require('express').Router()

route.use('/auth', require(path.join(__dirname, '/auth')))

route.use('/users', require(path.join(__dirname, '/user')))
route.use('/roles', require(path.join(__dirname, '/role')))
route.use('/roles-users', require(path.join(__dirname, '/roleUsers')))
route.use('/permissions', require(path.join(__dirname, '/permission')))

// Orders
route.use('/orders', require(path.join(__dirname, '/order')))
route.use('/order-items', require(path.join(__dirname, '/orderItem')))



//Google Maps directions Services
route.use('/google-directions', require(path.join(__dirname, '/googleDirections')))

// Partners
route.use('/partners', require(path.join(__dirname, '/partner')))
route.use('/partners-statuses', require(path.join(__dirname, '/partnersStatuses')))
route.use('/partners-products', require(path.join(__dirname, '/partnersProducts')))
route.use('/partners-openings', require(path.join(__dirname, '/partnersOpenings')))
route.use('/partners-special-openings', require(path.join(__dirname, '/partnersSpecialOpenings')))
route.use('/partners-orders-history', require(path.join(__dirname, '/partnerOrdersHistory')))
route.use('/partners-pending-orders', require(path.join(__dirname, '/partnersPendingOrders')))
route.use('/partners-accepted-orders', require(path.join(__dirname, '/partnersAcceptedOrders')))
route.use('/partners-category-products', require(path.join(__dirname, '/partnersCategoryProducts')))

// Opening
route.use('/openings', require(path.join(__dirname, '/openings')))
route.use('/special-openings', require(path.join(__dirname, '/specialOpenings')))

// Customers
route.use('/customers', require(path.join(__dirname, '/customers')))

// Confirmation Code
route.use('/customers-send-confirmation-code', require(path.join(__dirname, '/customersConfirmationCode')))
route.use('/customers-verify-confirmation-code', require(path.join(__dirname, '/customerVerifyConfirmationCode')))


// Distributors
route.use('/distributors', require(path.join(__dirname, '/distributors')))
route.use('/distributors-active-orders', require(path.join(__dirname, '/distributorActiveOrders')))
route.use('/distributors-delivered-orders', require(path.join(__dirname, '/distributorDeliveredOrders')))

// Products
route.use('/products', require(path.join(__dirname, '/products')))
route.use('/products-image', require(path.join(__dirname, '/imageProduct')))

// Aditionals
route.use('/aditionals', require(path.join(__dirname, '/aditionals')))

// Categories
route.use('/categories', require(path.join(__dirname, '/categories')))

route.use('/reasons-decline-orders', require(path.join(__dirname, '/reasonsDeclineOrders')))

module.exports = route