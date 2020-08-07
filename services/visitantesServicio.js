const Visitantes = require('../models').visitantes
const abstractService = require('./abstract/abstractService')

class ResidentesService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Visitantes)
    }
}

module.exports = ResidentesService