const OrderItems = require('../models').order_items
const abstractService = require('./abstract/abstractService')

class OrderItemsService extends abstractService {

    constructor(){
        super()
        
        const relations = {}    

        this.setRelations(relations)
        this.setModel(OrderItems)
    }

}

module.exports = OrderItemsService