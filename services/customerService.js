const Customer = require('../models').customers
const CustomerAddresses = require('../models').customer_addresses
const abstractService = require('./abstract/abstractService')

class CustomerService extends abstractService {

    constructor(){
        super()

        const relations = {
            
            include: [{
                model: CustomerAddresses,as:'addresses'
            }]
        }     

        this.setRelations(relations)
        this.setModel(Customer)
    }
}

module.exports = CustomerService