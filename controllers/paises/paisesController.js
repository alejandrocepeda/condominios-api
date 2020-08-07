const PaisesService = require('../../services/paisesService')

async function store (req, res, next) {

    paisesService = new PaisesService

    try{  

      let toCreate = {        
        name: req.body.name
      }
      
      const category = await paisesService.Create(toCreate)
      
      return res.success({data:category,message:'Pais is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    paisesService = new PaisesService

    try {
        
        const categories = await paisesService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    paisesService = new PaisesService

    try{
        const category = await paisesService.getOne({where: {id:req.params.id}})

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

  paisesService = new PaisesService

  try{
    const category = await paisesService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Pais is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    paisesService = new PaisesService

    try{
        
        await paisesService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Visitante is deleted'
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