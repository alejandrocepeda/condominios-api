const PartnerStatuses = require('../models').partner_statuses
const abstractService = require('./abstract/abstractService')

class PartnerStatusesService extends abstractService {

    constructor(){
        super()

        const relations = {}    
        
        this.setRelations(relations)
        this.setModel(PartnerStatuses)
    }
    
}

module.exports = PartnerStatusesService