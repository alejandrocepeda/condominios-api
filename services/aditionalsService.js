const Aditionals = require('../models').aditionals

const abstractService = require('./abstract/abstractService')

class AditionalsService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(Aditionals)
    }

}

module.exports = AditionalsService