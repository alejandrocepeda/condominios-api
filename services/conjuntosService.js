const Conjuntos = require('../models').conjuntos
const Ciudades = require('../models').ciudades
const Paises = require('../models').paises
const abstractService = require('./abstract/abstractService')

class ConjuntosService extends abstractService {

    constructor(){
        super()

        const relations = {
            include: [
                {model: Ciudades},
                {model: Paises}
            ]
        }     

        this.setRelations(relations)
        this.setModel(Conjuntos)
    }
}

module.exports = ConjuntosService