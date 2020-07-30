const Partner = require('../models').partners
const Opening = require('../models').openings
const SpecialOpening = require('../models').special_openings
const PartnerStatuses = require('../models').partner_statuses
const abstractService = require('./abstract/abstractService')

class PartnerService extends abstractService {

    constructor(){
        super()
        
        const relations = {
            
            include: [{
                model: PartnerStatuses,as:'status'
            },{
                model: Opening,as:'openings'
            },{ 
                model: SpecialOpening,as:'special_openings'
            }
            ]
        }    

        this.setRelations(relations)
        this.setModel(Partner)
        
    }

    
}

module.exports = PartnerService