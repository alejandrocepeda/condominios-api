const AditionalsService = require('../../services/aditionalsService')

async function store (req, res, next) {

    aditionalsService = new AditionalsService

    try{  

      let toCreate = {        
        name: req.body.name,
        product_id: req.body.product_id,
        unit_price: req.body.unit_price
      }
      
      const aditional = await aditionalsService.Create(toCreate)
      
      return res.success({ data: aditional,message: 'Aditional is created' },200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    aditionalsService = new AditionalsService

    try {
        
        const aditionals = await aditionalsService.showAll({})
        
        return res.showAll(aditionals,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    aditionalsService = new AditionalsService

    try{
        const aditionals = await aditionalsService.getOne({where: {id:req.params.id}})

        return res.showOne(aditionals,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    product_id: req.body.product_id,
    unit_price: req.body.unit_price
  }

  toUpdate = req.omit(toUpdate)

  aditionalsService = new AditionalsService

  try{
    const aditional = await aditionalsService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Aditional is updated',
      data:aditional
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    aditionalsService = new AditionalsService

    try{
        
        await aditionalsService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Aditional is deleted'
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