const CasosService = require('../../services/casosService')

async function store (req, res, next) {

    casosService = new CasosService

    try{  

      let toCreate = {        
        titulo: req.body.titulo,        
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        conjunto_id: req.body.conjunto_id,
      }
      
      const category = await casosService.Create(toCreate)
      
      return res.success({data:category,message:'Casos is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    casosService = new CasosService

    try {
        
        const categories = await casosService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    casosService = new CasosService

    try{
        const category = await casosService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    titulo: req.body.titulo,    
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    conjunto_id: req.body.conjunto_id,
  }

  toUpdate = req.omit(toUpdate)

  casosService = new CasosService

  try{
    const category = await casosService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Casos is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    casosService = new CasosService

    try{
        
        await casosService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Casos is deleted'
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