const OrderService = require('../../services/orderService')

async function index (req, res, next) {
  
  orderService = new OrderService

  try {

      let orders = []
      
      
      orders = await orderService.showAll({
        where: {
          partner_id:req.params.id,
          status_id:  {
            $or: [2, 6]
          }
        },
        order:[
          ['id','DESC']
        ]
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