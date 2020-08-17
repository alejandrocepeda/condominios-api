const NovedadesFaltasService = require('../../services/novedadesFaltasService')

async function store (req, res, next) {

    novedadesFaltasService = new NovedadesFaltasService

    try{  

      let toCreate = {        
        propietario_id: req.body.propietario_id,
        reporte: req.body.reporte,
        fecha_hora: req.body.fecha_hora,        
        conjunto_id: req.body.conjunto_id,
      }
      
      const category = await novedadesFaltasService.Create(toCreate)
      
      return res.success({data:category,message:'Novedades is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    novedadesFaltasService = new NovedadesFaltasService

    try {
        
        const categories = await novedadesFaltasService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    novedadesFaltasService = new NovedadesFaltasService

    try{
        const category = await novedadesFaltasService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    propietario_id: req.body.propietario_id,
    reporte: req.body.reporte,
    fecha_hora: req.body.fecha_hora,        
    conjunto_id: req.body.conjunto_id,
  }

  toUpdate = req.omit(toUpdate)

  novedadesFaltasService = new NovedadesFaltasService

  try{
    const category = await novedadesFaltasService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Novedades is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    novedadesFaltasService = new NovedadesFaltasService

    try{
        
        await novedadesFaltasService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Novedades is deleted'
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