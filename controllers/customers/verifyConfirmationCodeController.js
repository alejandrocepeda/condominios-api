const ConfirmationCodeService = require('../../services/confirmationCodesService')
const moment = require('moment')
const _ = require('lodash')
const bcrypt = require('bcrypt')

const UserService = require('../../services/userService')
const CustomerService = require('../../services/customerService')
const { jwtSign, setScopes } = require('../../plugins/jsonwebtoken')

async function store (req, res, next) {

    confirmationCodeService = new ConfirmationCodeService

    try{  

        const row = await confirmationCodeService.showAll({
            where: {
                phone_number: req.body.phone_number,
                code: req.body.code,
                verified: false,
            }
        })
        
        // Validation code
        if (row.length == 0){
            return res.error({ message:`The confirmation code is wrong` },404)        
        }

        confirmation = _.first(row)

        const now = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm') 
        
        const isExpired = moment(now).tz('America/Bogota').isAfter(confirmation.date_time_expire)

        if (isExpired) {
            return res.error({ message:`The confirmation code is expired` },404)        
        }
        
        const toUpdate = {
            verified: true
        }

        await confirmationCodeService.Update({
            where: {
                phone_number: req.body.phone_number,
                code : req.body.code,
            }
        }, toUpdate)


        // start refectorize this code
        const customerService = new CustomerService
        const userService = new UserService
        let user = {}

        let findCustomer = await customerService.showAll({ where: {phone_number:req.body.phone_number}})

        // Create customer if not exists
        if (findCustomer.length == 0){
            
            const toCustomerCreate = {        
                first_name: req.body.phone_number,
                last_name: req.body.phone_number,            
                phone_number: req.body.phone_number,
                identification_number: req.body.phone_number,
                identification_type_id:4,
                phone_country_code:'57',
                country_id: 1,
                date_birth: null,
                actived: false,            
                confirmation_code: req.body.code
            }
            
            const customer = await customerService.Create(toCustomerCreate)            
            let findUser = await userService.showAll({ where: { model_id: customer.id }})
            
            //Create user if not exists
            if (findUser.length == 0){

                // Create user form nre customer
                const hash = await bcrypt.hash(req.body.code, 10)

                const toUserCreate = {        
                    name: customer.first_name,
                    email: "na@delivery.tars.dev",
                    password: hash,
                    application_id: 1,
                    model_id: customer.id,
                    role_id: 2
                }

                const newUser = await userService.Create(toUserCreate)   
                user = await userService.getOne({ where: { id: newUser.id }})             
            }
            else{
                user = await userService.getOne({ where: { id: findUser[0].id }})
            }
    
        }
        else{           
            let findUser = await userService.showAll({ where: { model_id: findCustomer[0].id }})
            
            //Create user if not exists
            if (findUser.length == 0){

                // Create user form nre customer
                const hash = await bcrypt.hash(req.body.code, 10)

                const toUserCreate = {        
                    name: findCustomer[0].first_name,
                    email: "na@delivery.tars.dev",
                    password: hash,
                    application_id: 1,
                    model_id: findCustomer[0].id,
                    role_id: 2
                }

                const newUser = await userService.Create(toUserCreate)   

                user = await userService.getOne({ where: { id: newUser.id }})             
            }
            else{
                user = await userService.getOne({ where: { id: findUser[0].id }})
            }
        }
        // end refectorize

        //Create token
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
    }
    catch (error){    
        next(error)
    }
}

module.exports = {
  store
}