const Conjuntos = require('../models').conjuntos
const abstractService = require('./abstract/abstractService')

class ConjuntosService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Conjuntos)
    }
}

module.exports = ConjuntosService