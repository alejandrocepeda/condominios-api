const ResidentesService = require('../../services/residentesService')

async function store (req, res, next) {

    residentesService = new ResidentesService

    try{  

      let toCreate = {        
        name: req.body.name
      }
      
      const category = await residentesService.Create(toCreate)
      
      return res.success({data:category,message:'Residente is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    residentesService = new ResidentesService

    try {
        
        const categories = await residentesService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    residentesService = new ResidentesService

    try{
        const category = await residentesService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name
  }

  toUpdate = req.omit(toUpdate)

  residentesService = new ResidentesService

  try{
    const category = await residentesService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Residente is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    residentesService = new ResidentesService

    try{
        
        await residentesService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Residente is deleted'
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