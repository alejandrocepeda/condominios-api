const ProductsServices = require('../../services/productsServices')


async function index (req, res, next) {
  
    productsServices = new ProductsServices

    try {
        
        const products = await productsServices.showAll({
          where: {
            partner_id:req.params.id
          }
        })
        
        return res.showAll(products,200)
    }
    catch (error){
        next(error)
    }
}


module.exports = {
  index
}