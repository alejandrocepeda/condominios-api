const Distributor = require('../models').distributors

const abstractService = require('./abstract/abstractService')

class CustomerService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Distributor)
    }
}

module.exports = CustomerService