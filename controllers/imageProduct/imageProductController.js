const ProductsServices = require('../../services/productsServices')
const imagesUpload = require('../../components/imagesUpload')

async function store (req, res, next) {

    productsServices = new ProductsServices

    try{  
        
      	imagesUpload.upload(req,'pic',`product-${req.params.id}`).then(async(response) => {
            
           const toCreate = {
             pic: response
           }

           const product = await productsServices.Update({where: {id: req.params.id}}, toCreate)
           

           return res.success({data: product,message: 'Product is created'},200)        
        })
        

    }
    catch (error){    
        return next(error)
    }
}

module.exports = {  
  store
}
