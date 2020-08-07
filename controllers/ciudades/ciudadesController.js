const CiudadesServices = require('../../services/ciudadesServices')

async function store (req, res, next) {

    ciudadesServices = new CiudadesServices

    try{  

      let toCreate = {        
        name: req.body.name
      }
      
      const category = await ciudadesServices.Create(toCreate)
      
      return res.success({data:category,message:'Ciudad is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    ciudadesServices = new CiudadesServices

    try {
        
        const categories = await ciudadesServices.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    ciudadesServices = new CiudadesServices

    try{
        const category = await ciudadesServices.getOne({where: {id:req.params.id}})

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

  ciudadesServices = new CiudadesServices

  try{
    const category = await ciudadesServices.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Ciudad is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    ciudadesServices = new CiudadesServices

    try{
        
        await ciudadesServices.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Ciudad is deleted'
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