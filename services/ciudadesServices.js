const Ciudades = require('../models').ciudades
const abstractService = require('./abstract/abstractService')

class CiudadesService extends abstractService {

    constructor(){
        super()

        const relations = {}     

        this.setRelations(relations)
        this.setModel(Ciudades)
    }
}

module.exports = CiudadesService