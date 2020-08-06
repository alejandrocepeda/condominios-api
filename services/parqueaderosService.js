const Parqueaderos = require('../models').parqueaderos
const Residentes = require('../models').residentes
const Conjuntos = require('../models').conjuntos

const abstractService = require('./abstract/abstractService')

class ParqueaderosService extends abstractService {

    constructor(){
        super()

        const relations = {
            include:[
                { model: Residentes},
                { model: Conjuntos}
            ]
        }     

        this.setRelations(relations)
        this.setModel(Parqueaderos)
    }
}

module.exports = ParqueaderosService