const Category = require('../models').categories

const abstractService = require('./abstract/abstractService')

class CategoryService extends abstractService {

    constructor(){
        super()

        const relations = {}    

        this.setRelations(relations)
        this.setModel(Category)
    }

}

module.exports = CategoryService