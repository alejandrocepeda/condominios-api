const UbicacionApartamentos = require('../models').ubicacion_apartamentos
const abstractService = require('./abstract/abstractService')

class UbicacionApartamentosService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(UbicacionApartamentos)
    }

}

module.exports = UbicacionApartamentosService