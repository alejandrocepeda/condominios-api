const ComunicadosService = require('../../services/comunicadosService')

async function store (req, res, next) {

    comunicadosService = new ComunicadosService

    try{  

      let toCreate = {        
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha_desde: req.body.fecha_desde,
        fecha_hasta: req.body.fecha_hasta,
        fecha_creacion: req.body.fecha_creacion,
        conjunto_id: req.body.conjunto_id,
      }
      
      const category = await comunicadosService.Create(toCreate)
      
      return res.success({data:category,message:'Comunicado is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    comunicadosService = new ComunicadosService

    try {
        
        const categories = await comunicadosService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    comunicadosService = new ComunicadosService

    try{
        const category = await comunicadosService.getOne({where: {id:req.params.id}})

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
    fecha_desde: req.body.fecha_desde,
    fecha_hasta: req.body.fecha_hasta,
    fecha_creacion: req.body.fecha_creacion,
    conjunto_id: req.body.conjunto_id,
  }

  toUpdate = req.omit(toUpdate)

  comunicadosService = new ComunicadosService

  try{
    const category = await comunicadosService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Comunicado is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    comunicadosService = new ComunicadosService

    try{
        
        await comunicadosService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Comunicado is deleted'
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