const Paises = require('../models').paises
const abstractService = require('./abstract/abstractService')

class PaisesService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Paises)
    }
}

module.exports = PaisesService