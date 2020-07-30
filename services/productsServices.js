const Product = require('../models').products
const Aditional = require('../models').aditionals

const abstractService = require('./abstract/abstractService')

class ProductService extends abstractService {

    constructor(){
        super()

        const relations = {
            
            include: [{
                model: Aditional,as:'aditionals'
            }]
        }     

        this.setRelations(relations)
        this.setModel(Product)
    }

}

module.exports = ProductService