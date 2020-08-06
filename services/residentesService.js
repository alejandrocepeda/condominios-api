const Residentes = require('../models').residentes
const abstractService = require('./abstract/abstractService')

class ResidentesService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Residentes)
    }
}

module.exports = ResidentesService