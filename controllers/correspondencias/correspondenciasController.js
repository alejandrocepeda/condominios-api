const CorrespondeciasService = require('../../services/correspondeciasService')

async function store (req, res, next) {

    correspondeciasService = new CorrespondeciasService

    try{  

      let toCreate = {        
        name: req.body.name,
        conjunto_id: req.body.conjunto_id,
        residente_id: req.body.residente_id
      }
      
      const category = await correspondeciasService.Create(toCreate)
      
      return res.success({data:category,message:'Correspondencia is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    correspondeciasService = new CorrespondeciasService

    try {
        
        const categories = await correspondeciasService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    correspondeciasService = new CorrespondeciasService

    try{
        const category = await correspondeciasService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    conjunto_id: req.body.conjunto_id,
    residente_id: req.body.residente_id
  }

  toUpdate = req.omit(toUpdate)

  correspondeciasService = new CorrespondeciasService

  try{
    const category = await correspondeciasService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Correspondencia is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    correspondeciasService = new CorrespondeciasService

    try{
        
        await correspondeciasService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Correspondencia is deleted'
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