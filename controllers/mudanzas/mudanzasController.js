const MudanzasService = require('../../services/mudanzasService')

async function store (req, res, next) {

    mudanzasService = new MudanzasService

    try{  

      let toCreate = {        
        apartamento_id: req.body.apartamento_id,
        placa_vehiculo: req.body.placa_vehiculo,
        desde: req.body.desde,        
        hasta: req.body.hasta,
        conjunto_id: req.body.conjunto_id,
      }
      
      const category = await mudanzasService.Create(toCreate)
      
      return res.success({data:category,message:'Mudanzas is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    mudanzasService = new MudanzasService

    try {
        
        const categories = await mudanzasService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    mudanzasService = new MudanzasService

    try{
        const category = await mudanzasService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    apartamento_id: req.body.apartamento_id,
    placa_vehiculo: req.body.placa_vehiculo,
    desde: req.body.desde,        
    hasta: req.body.hasta,
    conjunto_id: req.body.conjunto_id,
  }

  toUpdate = req.omit(toUpdate)

  mudanzasService = new MudanzasService

  try{
    const category = await mudanzasService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Mudanzas is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    mudanzasService = new MudanzasService

    try{
        
        await mudanzasService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Mudanzas is deleted'
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