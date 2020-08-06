const Correspondencias = require('../models').correspondencias
const abstractService = require('./abstract/abstractService')
const Residentes = require('../models').residentes
const Conjuntos = require('../models').conjuntos

class CorrespondenciasService extends abstractService {

    constructor(){
        super()

        const relations = {
            include:[
                { model: Residentes},
                { model: Conjuntos}
            ]
        }      

        this.setRelations(relations)
        this.setModel(Correspondencias)
    }
}

module.exports = CorrespondenciasService