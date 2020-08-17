const Comunicados = require('../models').comunicados
const abstractService = require('./abstract/abstractService')

class ComunicadosService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(Comunicados)
    }

}

module.exports = ComunicadosService