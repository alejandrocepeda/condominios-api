const Parqueaderos = require('../models').parqueaderos
const Apartamentos = require('../models').apartamentos
const Conjuntos = require('../models').conjuntos

const abstractService = require('./abstract/abstractService')

class ParqueaderosService extends abstractService {

    constructor(){
        super()

        const relations = {
            include:[
                { model: Apartamentos},
                { model: Conjuntos}
            ]
        }     

        this.setRelations(relations)
        this.setModel(Parqueaderos)
    }
}

module.exports = ParqueaderosService