const ReasonsDeclineOrdersServices = require('../../services/reasonsDeclineOrdersServices')

async function store (req, res, next) {

    reasonsDeclineOrdersServices = new ReasonsDeclineOrdersServices

    try{  

      let toCreate = {
        name: req.body.name
      }
      
      const reason = await reasonsDeclineOrdersServices.Create(toCreate)
      
      return res.success({data:reason,message:'Reason Decline is created'},200)        
    }
    catch (error){    
      next(error)
    }
}


async function index (req, res, next) {
  
    reasonsDeclineOrdersServices = new ReasonsDeclineOrdersServices

    try {
        
        let reasons = await reasonsDeclineOrdersServices.showAll({})
        
        return res.showAll(reasons,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    reasonsDeclineOrdersServices = new ReasonsDeclineOrdersServices

    try{
        const reason = await reasonsDeclineOrdersServices.getOne({where: {id:req.params.id}})

        return res.showOne(reason,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name
  }

  reasonsDeclineOrdersServices = new ReasonsDeclineOrdersServices

  try{
    const role = await reasonsDeclineOrdersServices.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Reason is updated',
      data:role
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    reasonsDeclineOrdersServices = new ReasonsDeclineOrdersServices

    try{
        
        await reasonsDeclineOrdersServices.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Reason is deleted'
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