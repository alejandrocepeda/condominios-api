const OrderItemsService = require('../../services/orderItemsService')
const OrderService = require('../../services/orderService')
const ProductService = require('../../services/productsServices')

async function store (req, res, next) {


    orderItemsService = new OrderItemsService
    orderService = new OrderService
    productService = new ProductService

    try{  

      let toCreate = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,        
        quantity: req.body.quantity,
        unit_price: req.body.unit_price,
        ready_time: req.body.ready_time,        
        customer_instructions: req.body.customer_instructions
      }
      


      const orderItem = await orderItemsService.Create(toCreate)

      /*
      const order = await orderService.getOne({where:{id: req.body.order_id}})
      const product = await productService.getOne({where:{id: req.body.product_id}})

      if (product.time_estimate > order.ready_time){

        const toUpdate = {
          ready_time : product.time_estimate
        }

        await orderService.Update({where:{id: req.body.order_id}},toUpdate)
      }
      */
      
      return res.success({data: orderItem,message:'Order Item is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  

    orderItemsService = new OrderItemsService

    try {
        
        let orders = []
        orders = await orderItemsService.showAll({})
        
        return res.showAll(orders,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    orderItemsService = new OrderItemsService

    try{
        const order = await orderItemsService.getOne({where: {id:req.params.id}})

        return res.showOne(order,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,        
        quantity: req.body.quantity,
        unit_price: req.body.unit_price,
        ready_time: req.body.ready_time,        
        customer_instructions: req.body.customer_instructions
  }

  toUpdate = req.omit(toUpdate)

  orderItemsService = new OrderItemsService

  try{
    const order = await orderItemsService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Order Item is updated',
      data:order
    },200)
    
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    orderItemsService = new OrderItemsService

  try{
    
    await orderItemsService.Delete({where: {id:req.params.id}})
    
    return res.success({
      message:'Order Item is deleted'
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