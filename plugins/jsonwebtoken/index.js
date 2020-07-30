const jwt = require('jsonwebtoken')
const { config } = require('../../config')
//const UserService = require('../../services/userService')
const _ = require('lodash')

function jwtSign(user){
    const payLoad = setPayload(user)

    const token = jwt.sign(
        payLoad,
        config.authJwtSecret, { expiresIn: config.expiresIn }
    )

    return token
}

function setScopes(user){

    const rolePermissions = user.role_permissions.map((item)=>{
        return item.permission.name
    })
    
    const userPermissions = user.user_permissions.map((item)=>{
        return item.permission.name
    })
    
    const payLoad = _.concat(rolePermissions,userPermissions)   

    return payLoad
}

function setPayload(user){

    const payLoad = {
        sub: user.id,         
        email: user.email,
        name:user.name,
        role_name: user.role.name,   
        role_id: user.role_id,        
        partner: user.partner,
        scopes:setScopes(user),
    }

    return payLoad
}


module.exports = {
    jwtSign,
    setScopes,
    setPayload
}