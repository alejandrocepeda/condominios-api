const PartnerService = require('../../services/partnerService')

async function store (req, res, next) {

    partnerService = new PartnerService

    try{  

      let toCreate = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        location_coordinates: req.body.location_coordinates,
        actived: req.body.actived,
        status_id: req.body.status_id,
        rut: req.body.rut,
        owner_name: req.body.owner_name,
        owner_phone: req.body.owner_phone,
        pic: req.body.pic
      }
      
      const partner = await partnerService.Create(toCreate)
      
      return res.success({data:partner,message:'Partner is created'},200)        
    }
    catch (error){    
      next(error)
    }
}


async function index (req, res, next) {
  
    partnerService = new PartnerService

    try {
        
        let partner = await partnerService.showAll({})
        
        return res.showAll(partner,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    partnerService = new PartnerService

    try{
        const partner = await partnerService.getOne({where: {id:req.params.id}})

        return res.showOne(partner,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    location_coordinates: req.body.location_coordinates,
    actived: req.body.actived,
    status_id: req.body.status_id,
    rut: req.body.rut,
    owner_name: req.body.owner_name,
    owner_phone: req.body.owner_phone,
    pic: req.body.pic
  }

  toUpdate = req.omit(toUpdate)

  partnerService = new PartnerService

  try{
    const partner = await partnerService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Partner is updated',
      data:partner
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    partnerService = new PartnerService

    try{
        
        await partnerService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Partner is deleted'
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