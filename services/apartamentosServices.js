const Apartamento = require('../models').apartamentos
const Conjunto = require('../models').conjuntos
const abstractService = require('./abstract/abstractService')

class ApartamentosService extends abstractService {

    constructor(){
        super()

        const relations = {
            include: {model: Conjunto}
        }    

        this.setRelations(relations)
        this.setModel(Apartamento)
    }

}

module.exports = ApartamentosService