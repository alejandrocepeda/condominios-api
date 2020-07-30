const ReasonsDeclineOrders = require('../models').reasons_decline_orders
const abstractService = require('./abstract/abstractService')

class ReasonsDeclineOrdersService extends abstractService {

    constructor(){
        super()

        const relations = {}  

        this.setRelations(relations)
        this.setModel(ReasonsDeclineOrders)
    }
}

module.exports = ReasonsDeclineOrdersService