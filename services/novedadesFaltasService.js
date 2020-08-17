const NovedadesFaltas = require('../models').novedades_faltas
const abstractService = require('./abstract/abstractService')

class NovedadesFaltasService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(NovedadesFaltas)
    }

}

module.exports = NovedadesFaltasService