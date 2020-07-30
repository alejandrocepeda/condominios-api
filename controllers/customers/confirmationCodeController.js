const Duva = require('../../components/duva')
const customId = require("custom-id")
const ConfirmationCodeService = require('../../services/confirmationCodesService')
const moment = require('moment')

async function store (req, res, next) {

    confirmationCodeService = new ConfirmationCodeService

    try{  

        const code = customId({
            name: req.body.from,
            email: req.body.phone_number
        })
        
        const toSend = {
            from: req.body.from || '890703',
            numbers: req.body.phone_number,
            paisId: 1,
            message: `Codigo de confirmación es ${code}`,
            campaign_name: "Delivery"
        }

        await Duva.sendSMS(toSend)

        const dateTimeExpire = moment().tz('America/Bogota').add(5, 'minutes').format('YYYY-MM-DD HH:mm') 

        const toCreate = {
            code: code,
            verified: false,
            phone_number: req.body.phone_number,
            date_time_expire: dateTimeExpire
        }

        await confirmationCodeService.Create(toCreate)
        
        return res.success({message:`The confirmation code is generated ${code}`},200)        
    }
    catch (error){    
        next(error)
    }
}

module.exports = {
  store
}