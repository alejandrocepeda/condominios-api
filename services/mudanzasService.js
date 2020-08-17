const Mudanzas = require('../models').mudanzas
const abstractService = require('./abstract/abstractService')


class MudanzasService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(Mudanzas)
    }

}

module.exports = MudanzasService