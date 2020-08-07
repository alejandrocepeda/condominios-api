const ApartamentosServices = require('../../services/apartamentosServices')

async function store (req, res, next) {

    apartamentosServices = new ApartamentosServices

    try{  

      let toCreate = {        
        name: req.body.name,
        conjunto_id: req.body.conjunto_id
      }
      
      const category = await apartamentosServices.Create(toCreate)
      
      return res.success({data:category,message:'Apartamentos is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    apartamentosServices = new ApartamentosServices

    try {
        
        const categories = await apartamentosServices.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    apartamentosServices = new ApartamentosServices

    try{
        const category = await apartamentosServices.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    conjunto_id: req.body.conjunto_id
  }

  toUpdate = req.omit(toUpdate)

  apartamentosServices = new ApartamentosServices

  try{
    const category = await apartamentosServices.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Apartamentos is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    apartamentosServices = new ApartamentosServices

    try{
        
        await apartamentosServices.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Apartamentos is deleted'
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