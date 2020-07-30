'use strict'

const router = require('express').Router()
const passport = require('passport')
const { config } = require('../config')
const _ = require('lodash') 
// Basic strategy
require('../plugins/passport/strategies/basic')
// Google OAuth strategy
const {OAuth2Client} = require('google-auth-library')
const AuthService = require('../services/authService')
const { jwtSign, setScopes } = require('../plugins/jsonwebtoken')

router.post('/google-id-token',  async (req, res, next) => {

    const idToken = req.body.id_token
    
    const client = new OAuth2Client(config.googleClientID);
    
    async function verify() {

        const ticket = await client.verifyIdToken({
            idToken: idToken
        })

        const payload = ticket.getPayload()
        //const userid = payload['sub']
        const email = payload['email']

        const authService = new AuthService()

        const user = await authService.login(email)
        
        const token = jwtSign(user)

        return res.success({
            message:'Authentication is successfuly, to enjoy',
            token:token,
            user:{
                id:user.id,
                application:user.application,
                model_id:user.model_id,
                name:user.name,        
                role: user.role,                                  
                email:user.email,
                scopes:setScopes(user)
            }
        },200)

        //console.log(token)
    }
    
    verify().catch(() => {
        return res.error("Unauthorized",401)
    })    
})


router.post('/sign-in',  async (req, res, next) => { 
    
    passport.authenticate('basic', (error, user, info) => {
        
        try {
            
            if (error || !user){
                return res.error("Unauthorized",401)
            }
        
            req.login(user, { session: false}, async (error) => {

                if (error) {                    
                    return res.error(error,401)
                }

                const token = jwtSign(user)                

                return res.success({
                    message:'Authentication is successfuly, to enjoy',
                    token:token,
                    user:{
                        id:user.id,
                        application:user.application,
                        model_id:user.model_id,
                        name:user.name,        
                        role: user.role,                                  
                        email:user.email,
                        scopes:setScopes(user)
                    }
                },200)

            })
                
        } catch (error) {
            return res.error(error,401)
        }
        
    })(req, res, next)
})

/*
function jwtSign(user){
    const payLoad = setPayload(user)

    const token = jwt.sign(
        payLoad,
        config.authJwtSecret, { expiresIn: config.expiresIn }
    )

    return token
}
*/

/*
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
*/
module.exports = router