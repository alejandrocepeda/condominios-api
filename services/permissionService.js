const Permission = require('../models').permissions
const abstractService = require('./abstract/abstractService')

class PermissionService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(Permission)
    }

}

module.exports = PermissionService