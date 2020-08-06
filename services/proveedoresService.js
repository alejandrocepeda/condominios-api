const Proveedores = require('../models').proveedores
const abstractService = require('./abstract/abstractService')
const Conjuntos = require('../models').conjuntos

class ProveedoresService extends abstractService {

    constructor(){
        super()

        const relations = {
            include:[
                {model: Conjuntos}
            ]
        }     

        this.setRelations(relations)
        this.setModel(Proveedores)
    }
}

module.exports = ProveedoresService