const SpecialOpening = require('../models').special_openings
const abstractService = require('./abstract/abstractService')

class specialOpeningsService extends abstractService {

    constructor(){
        super()
        
        const relations = {}    

        this.setRelations(relations)
        this.setModel(SpecialOpening)
    }

}

module.exports = specialOpeningsService