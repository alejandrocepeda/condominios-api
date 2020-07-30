const DistributorService = require('../../services/distributorService')

async function store (req, res, next) {

    distributorService = new DistributorService

    try{  

      let toCreate = {        
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        identification_number: req.body.identification_number,
        identification_type_id: req.body.identification_type_id,        
        phone_country_code: req.body.phone_country_code,
        phone_number: req.body.phone_number,
        city_id: req.body.city_id,
        address: req.body.address,
        street: req.body.street,
        actived: req.body.actived,        
        date_birth: new Date(),
        pic: req.body.pic
      }
      
      const distributor = await distributorService.Create(toCreate)
      
      return res.success({data: distributor,message:'Distributor is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    distributorService = new DistributorService

    try {
            
        const distributor = await distributorService.showAll({})
        
        return res.showAll(distributor,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    distributorService = new DistributorService

    try{
        const distributor = await distributorService.getOne({where: {id:req.params.id}})

        return res.showOne(distributor,200)
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
        city_id: req.body.city_id,
        address: req.body.address,
        street: req.body.street,
        actived: req.body.actived,
        location_coordinates: req.body.location_coordinates,
        date_birth: new Date(),
        pic: req.body.pic
    }

    toUpdate = req.omit(toUpdate)

    distributorService = new DistributorService

    try{
        const distributor = await distributorService.Update({where: {id:req.params.id}},toUpdate)

        return res.success({
            message:'Distributor is updated',
            data: distributor
        },200)
    }
    catch (error){
        next(error)
    }
}


async function destroy (req, res, next) {
  
    distributorService = new DistributorService

    try{
        
        await distributorService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Distributor is deleted'
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