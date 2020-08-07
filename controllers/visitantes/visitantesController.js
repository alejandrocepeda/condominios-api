const VisitantesServicio = require('../../services/visitantesServicio')

async function store (req, res, next) {

    visitantesServicio = new VisitantesServicio

    try{  

      let toCreate = {        
        name: req.body.name,
        apartamento_id: req.body.name,
        apartamento_id:req.body.apartamento_id,
        autorizacion:req.body.autorizacion,
        place:req.body.place,
        puesto:req.body.puesto,
      }
      
      const category = await visitantesServicio.Create(toCreate)
      
      return res.success({data:category,message:'Visitante is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    visitantesServicio = new VisitantesServicio

    try {
        
        const categories = await visitantesServicio.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    visitantesServicio = new VisitantesServicio

    try{
        const category = await visitantesServicio.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    apartamento_id: req.body.name,
    apartamento_id:req.body.apartamento_id,
    autorizacion:req.body.autorizacion,
    place:req.body.place,
    puesto:req.body.puesto,
  }

  toUpdate = req.omit(toUpdate)

  visitantesServicio = new VisitantesServicio

  try{
    const category = await visitantesServicio.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Visitante is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    visitantesServicio = new VisitantesServicio

    try{
        
        await visitantesServicio.Delete({where: {id:req.params.id}})
        
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