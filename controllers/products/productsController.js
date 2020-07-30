const ProductsServices = require('../../services/productsServices')

async function store (req, res, next) {

    productsServices = new ProductsServices

    try{  
    
      let toCreate = {
        name: req.body.name,        
        partner_id: parseInt(req.body.partner_id), 
        sort_description: req.body.sort_description,
        unit_price: parseFloat(req.body.unit_price),
        is_aditional: req.body.is_aditional,
        in_discount: req.body.in_discount,
        discount_percent: req.body.discount_percent,
        price_with_discount: req.body.price_with_discount,
        category_id: parseInt(req.body.category_id),
        sub_category_id: parseInt(req.body.sub_category_id),
        out_of_stock: req.body.out_of_stock,        
        time_estimate: parseInt(req.body.time_estimate),              
        tags: req.body.tags
      }
      
      const product = await productsServices.Create(toCreate)
      
      return res.success({data: product,message: 'Product is created'},200)        
      
    }
    catch (error){    
        return next(error)
    }
}


async function index (req, res, next) {
  
    productsServices = new ProductsServices

    try {
        
        const products = await productsServices.showAll({})
        
        return res.showAll(products,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    productsServices = new ProductsServices

    try{
        const product = await productsServices.getOne({where: {id:req.params.id}})

        return res.showOne(product,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name,        
    partner_id: req.body.partner_id, 
    sort_description: req.body.sort_description,
    unit_price: req.body.unit_price,
    is_aditional: req.body.is_aditional,
    in_discount: req.body.in_discount,
    discount_percent: req.body.discount_percent,
    price_with_discount: req.body.price_with_discount,
    category_id: req.body.category_id,
    sub_category_id: req.body.sub_category_id,
    out_of_stock: req.body.out_of_stock,        
    time_estimate: req.body.time_estimate,  
    tags: req.body.tags
  }

  toUpdate = req.omit(toUpdate)

  productsServices = new ProductsServices

  try{
    const product = await productsServices.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Product is updated',
      data:product
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    productsServices = new ProductsServices

    try{
        
        await productsServices.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Product is deleted'
        },200)
        
    }
    catch(error){
        next(error)
    }
}

module.exports = {
  index,
  show,
  update,
  destroy,
  store
}