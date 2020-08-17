const Casos = require('../models').casos
const abstractService = require('./abstract/abstractService')

class CasosService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(Casos)
    }

}

module.exports = CasosService