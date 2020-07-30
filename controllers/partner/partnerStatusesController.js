const PartnerStatusesService = require('../../services/partnerStatusesService')

async function store (req, res, next) {

    partnerStatusesService = new PartnerStatusesService

    try{  

      let toCreate = {
        name: req.body.name,
        description: req.body.description,
      }
      
      const partner = await partnerStatusesService.Create(toCreate)
      
      return res.success({data:partner,message:'Partner Status is created'},200)        
    }
    catch (error){            
       next(error)
    }
}


async function index (req, res, next) {
  
    partnerStatusesService = new PartnerStatusesService

    try {
        
        let partner = await partnerStatusesService.showAll({})
        
        return res.showAll(partner,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    partnerStatusesService = new PartnerStatusesService

    try{
        const partner = await partnerStatusesService.getOne({where: {id:req.params.id}})

        return res.showOne(partner,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name,
    description: req.body.description,
  }

  toUpdate = req.omit(toUpdate)

  partnerStatusesService = new PartnerStatusesService

  try{
    const partner = await partnerStatusesService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Partner Status is updated',
      data:partner
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    partnerStatusesService = new PartnerStatusesService

    try{
        
        await partnerStatusesService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Partner Status is deleted'
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