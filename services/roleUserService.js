const RoleUsers = require('../models').role_users
const abstractService = require('./abstract/abstractService')

class RoleUserService extends abstractService {

    constructor(){
        super()

        const relations = {}

        this.setRelations(relations)
        this.setModel(RoleUsers)
    }

}

module.exports = RoleUserService