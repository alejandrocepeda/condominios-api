const CustomerService = require('../../services/customerService')

async function store (req, res, next) {

    customerService = new CustomerService

    try{  

      let toCreate = {        
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        identification_number: req.body.identification_number,
        identification_type_id: req.body.identification_type_id,        
        phone_country_code: req.body.phone_country_code,
        phone_number: req.body.phone_number,
        address_id: req.body.address_id,
        country_id: req.body.country_id,
        date_birth: new Date(),
        actived: req.body.actived,
        social_provider: req.body.social_provider,
        confirmation_code: req.body.confirmation_code,
        pic: req.body.pic,
        vip: req.body.vip
      }
      
      const customer = await customerService.Create(toCreate)
      
      return res.success({data: customer,message:'Customer is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    customerService = new CustomerService

    try {
            
        const customers = await customerService.showAll({})
        
        return res.showAll(customers,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    customerService = new CustomerService

    try{
        const customer = await customerService.getOne({where: {id:req.params.id}})

        return res.showOne(customer,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
    let toUpdate = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        identification_number: req.body.identification_number,
        identification_type_id: req.body.identification_type_id,        
        phone_country_code: req.body.phone_country_code,
        phone_number: req.body.phone_number,
        address_id: req.body.address_id,
        country_id: req.body.country_id,
        date_birth: new Date(),
        actived: req.body.actived,
        social_provider: req.body.social_provider,
        confirmation_code: req.body.confirmation_code,
        pic: req.body.pic,
        vip: req.body.vip
    }

    toUpdate = req.omit(toUpdate)

    customerService = new CustomerService

    try{
        const customer = await customerService.Update({where: {id:req.params.id}},toUpdate)

        return res.success({
        message:'Customer is updated',
        data: customer
        },200)
    }
    catch (error){
        next(error)
    }
}


async function destroy (req, res, next) {
  
    customerService = new CustomerService

    try{
        
        await customerService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Customer is deleted'
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