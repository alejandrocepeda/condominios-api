const ParqueaderosService = require('../../services/parqueaderosService')

async function store (req, res, next) {

    parqueaderosService = new ParqueaderosService

    try{  

      let toCreate = {        
        name: req.body.name,
        conjunto_id: req.body.conjunto_id,
        apartamento_id: req.body.apartamento_id,
        tipo_parqueadero: req.body.tipo_parqueadero,
      }
      
      const category = await parqueaderosService.Create(toCreate)
      
      return res.success({data:category,message:'Parqueadero is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    parqueaderosService = new ParqueaderosService

    try {
        
        const categories = await parqueaderosService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    parqueaderosService = new ParqueaderosService

    try{
        const category = await parqueaderosService.getOne({where: {id:req.params.id}})

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
    apartamento_id: req.body.apartamento_id,
    tipo_parqueadero: req.body.tipo_parqueadero,
  }

  toUpdate = req.omit(toUpdate)

  parqueaderosService = new ParqueaderosService

  try{
    const category = await parqueaderosService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Parqueadero is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    parqueaderosService = new ParqueaderosService

    try{
        
        await parqueaderosService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Parqueadero is deleted'
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