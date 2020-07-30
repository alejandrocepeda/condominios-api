const Opening = require('../models').openings
const abstractService = require('./abstract/abstractService')

class OpeningService extends abstractService {

    constructor(){
        super()
        
        const relations = {}    

        this.setRelations(relations)
        this.setModel(Opening)
    }

}

module.exports = OpeningService