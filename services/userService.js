const User = require('../models').users
const Application = require('../models').applications
const Role = require('../models').roles
const RolePermissions = require('../models').role_permissions
const UserPermissions = require('../models').user_permissions
const Permission = require('../models').permissions
const abstractService = require('./abstract/abstractService')

class UserService extends abstractService {

    constructor(){
        super()
        
        const relations = {        
            attributes: { exclude: ['password'] },
            include: [
            {
                model: Role,
                attributes:['id','name']
            },{
                model: RolePermissions,
                attributes:['id','permission_id'],
                include: [{
                    attributes:['name'],
                    model: Permission
                    
                }]
            },{
                model:UserPermissions,
                attributes:['id','permission_id'],
                include: [{
                    attributes:['name'],
                    model: Permission
                }]
            },{
                model:Application,
                attributes:['id','name']
            }]
        }    

        this.setRelations(relations)
        this.setModel(User)
        
    }

}

module.exports = UserService