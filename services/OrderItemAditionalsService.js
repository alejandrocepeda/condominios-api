const OrderItemAditionals = require('../models').order_item_aditionals

const abstractService = require('./abstract/abstractService')

class OrderItemAditionalsService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(OrderItemAditionals)
    }

}

module.exports = OrderItemAditionalsService