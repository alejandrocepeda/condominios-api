const OrderService = require('../../services/orderService')

async function index (req, res, next) {
  
  orderService = new OrderService

  try {

      let orders = []
      
      orders = await orderService.showAll(
        {where: {
          distributor_id:req.params.id,        
          status_id:4  
        }
      })
      
      return res.showAll(orders,200)
  }
  catch (error){
    next(error)
  }
}

module.exports = {
  index
}