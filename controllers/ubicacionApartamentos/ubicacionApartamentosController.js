const UbicacionApartamentosService = require('../../services/ubicacionApartamentosService')

async function store (req, res, next) {

    ubicacionApartamentosService = new UbicacionApartamentosService

    try{  

      let toCreate = {        
        nombre: req.body.nombre,
        reporte: req.body.reporte,
        estado: req.body.estado
      }
      
      const category = await ubicacionApartamentosService.Create(toCreate)
      
      return res.success({data:category,message:'Ubicacion is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    ubicacionApartamentosService = new UbicacionApartamentosService

    try {
        
        const categories = await ubicacionApartamentosService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    ubicacionApartamentosService = new UbicacionApartamentosService

    try{
        const category = await ubicacionApartamentosService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    nombre: req.body.nombre,
    reporte: req.body.reporte,
    estado: req.body.estado
  }

  toUpdate = req.omit(toUpdate)

  ubicacionApartamentosService = new UbicacionApartamentosService

  try{
    const category = await ubicacionApartamentosService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Ubicacion is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    ubicacionApartamentosService = new UbicacionApartamentosService

    try{
        
        await ubicacionApartamentosService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Ubicacion is deleted'
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