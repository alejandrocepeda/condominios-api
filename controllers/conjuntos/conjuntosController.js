const ConjuntosService = require('../../services/conjuntosService')

async function store (req, res, next) {

    conjuntosService = new ConjuntosService

    try{  

      let toCreate = {        
        name: req.body.name
      }
      
      const category = await conjuntosService.Create(toCreate)
      
      return res.success({data:category,message:'Conjunto is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    conjuntosService = new ConjuntosService

    try {
        
        const categories = await conjuntosService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    conjuntosService = new ConjuntosService

    try{
        const category = await conjuntosService.getOne({where: {id:req.params.id}})

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

  conjuntosService = new ConjuntosService

  try{
    const category = await conjuntosService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Conjunto is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    conjuntosService = new ConjuntosService

    try{
        
        await conjuntosService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Conjunto is deleted'
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