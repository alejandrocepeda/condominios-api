const OrderService = require('../../services/orderService')
const CustomerAddressesService = require('../../services/customerAddressesService')
const PartnerService = require('../../services/partnerService')
const adminFirebase = require('../../plugins/firebase')
const { directions } = require('../../plugins/google-maps')
const moment = require('moment')


async function store (req, res, next) {

    orderService = new OrderService
    customerAddressesService = new CustomerAddressesService
    partnerService = new PartnerService

    try{  


      const customer_address = await customerAddressesService.getOne({ where: { id:req.body.customer_address_id }})
      const partner_address = await partnerService.getOne({ where: { id: req.body.partner_id }})

      const distances = await directions(partner_address.location_coordinates,customer_address.location_coordinates)
      const duration = distances['routes'][0]['legs'][0]['duration']['text']
      
      let toCreate = {
        customer_id: req.body.customer_id,
        customer_address_id: req.body.customer_address_id,
        partner_id: req.body.partner_id,        
        payment_method_id: req.body.payment_method_id,
        date_time: new Date(),
        total_amount: req.body.total_amount,
        status_id: 1,
        delivered_time: duration,
        distributor_id: null,
        decline_reason: null,
        ready_time: null
      }
      
      const newOrder = await orderService.Create(toCreate)
      
      adminFirebase.Order().store(newOrder)

      const order = await orderService.getOne({where: {id: newOrder.id}})
      
      return res.success({data: order,message:'Order is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
    
  orderService = new OrderService

  try {
      
      let orders = []
      orders = await orderService.showAll({
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

async function show (req, res, next) {
  
  orderService = new OrderService

  try{
    const order = await orderService.getOne({where: {id:req.params.id}})

    return res.showOne(order,200)
  }
  catch (error ){
    next(error)
  }
}

async function update (req, res, next) {

  
  let toUpdate = {
    customer_id: req.body.customer_address_id,
    customer_address_id: req.body.customer_id,
    partner_id: req.body.partner_id,        
    payment_method_id: req.body.payment_method_id,    
    total_amount: req.body.total_amount,
    status_id: req.body.status_id,
    delivered_time: req.body.delivered_time,
    distributor_id: req.body.distributor_id,
    decline_reason: req.body.decline_reason,
    ready_time: req.body.ready_time,
    distributor_is_like: req.body.distributor_is_like
  }

  toUpdate = req.omit(toUpdate)

  orderService = new OrderService

  try{
    await orderService.Update({where: {id:req.params.id}},toUpdate)

    const order = await orderService.getOne({where: {id:req.params.id}})

    adminFirebase.Order().update(req.params.id,{
      status_id:req.body.status_id,
      distributor_id: req.body.distributor_id,
    })

    
    
    return res.success({
      message:'Order is updated',
      data: order
    },200)
    
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
  orderService = new OrderService

  try{
    
    await orderService.Delete({where: {id:req.params.id}})
    
    return res.success({
      message:'Order is deleted'
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