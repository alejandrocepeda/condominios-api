const Role = require('../models').roles
const RolePermissions = require('../models').role_permissions
const Permissions = require('../models').permissions
const abstractService = require('./abstract/abstractService')

class RoleService extends abstractService {

    constructor(){
        super()
        
        const relations = {                    
            include: [{
                model: RolePermissions,
                include:[{
                    model:Permissions,
                    attributes: ['name'],
                }]
            }]
        }    

        this.setRelations(relations)
        this.setModel(Role)
    }

}

module.exports = RoleService