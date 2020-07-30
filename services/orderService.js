const Order = require('../models').orders
const OrderItems = require('../models').order_items
const OrderItemAditionals = require('../models').order_item_aditionals
const Aditionals = require('../models').aditionals
const OrderStatuses = require('../models').order_statuses
const Customer = require('../models').customers
const CustomerAddress = require('../models').customer_addresses
const Partners = require('../models').partners
const Distributor = require('../models').distributors
const Product = require('../models').products
const abstractService = require('./abstract/abstractService')

class OrderService extends abstractService {

    constructor(){
        super()   

        const relations = {        
            include: [
                {
                    model:Partners,
                    attributes:['id','name']
                },
                {
                    model:OrderItems,as: 'items',
                    include: [        
                        {
                            model:Product
                        },
                        {
                            model: OrderItemAditionals,as:'aditionals',
                            include: [{model: Aditionals}]
                        }
                        
                    ]
                },
                {
                    model:Customer,
                    attributes: { exclude: ['password'] },
                },
                {
                    model:OrderStatuses,as: 'status'            
                },
                {
                    model:Distributor,
                    attributes: { exclude: ['password'] },
                },
                {
                    model: CustomerAddress
                }
            ]
        }   
        
        
        this
        .setRelations(relations)
        .setModel(Order)
    }
    
}

module.exports = OrderService