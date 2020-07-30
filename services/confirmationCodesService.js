const ConfirmationCodes = require('../models').confirmation_codes

const abstractService = require('./abstract/abstractService')

class ConfirmationCodesService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(ConfirmationCodes)
    }

}

module.exports = ConfirmationCodesService