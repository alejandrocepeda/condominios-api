const CustomerAddresses = require('../models').customer_addresses

const abstractService = require('./abstract/abstractService')

class CustomerAddressesService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(CustomerAddresses)
    }

}

module.exports = CustomerAddressesService