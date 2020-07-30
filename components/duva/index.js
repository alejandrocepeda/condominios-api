const { config } = require('../../config')
const axios = require('axios')


function axiosBootstrap(){
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.baseURL = 'https://duvapi.tars.dev/'
    axios.defaults.headers.common['Authorization'] = `Bearer ${config.duvaApiToken}`
}

async function sendSMS(options) {

    axiosBootstrap()

    const toSend = {
        from: options.from,
        numbers: options.numbers,
        paisId: options.paisId,
        message: options.message,
        campaign_name: options.campaign_name
    }
    
    const response = await axios.post('admin/temp/sms/enviar/individual',toSend)

    return response.data
}


async function login () {

    const toLogin = {
        email: "alejandro.cepeda@tars.dev",
        password: "deli_numero_73854",
        rememberMe: false
    }
    
    const response = await axios.post('auth/login',toLogin)
    return response.access_token
}


async function sendEmail () {

    axiosBootstrap()

    const toSend = {
        email: "alejandro.cepeda@tars.dev",
        subject: "Ejemplo equipo",
        content: "<p><b>EJEMPLO 1 </b></p>"
    }

    const response = await axios.post('admin/mailerLite/sendIndividual',toSend)

    return response
}
    
module.exports = {
    sendSMS,
    sendEmail,
    login
}

