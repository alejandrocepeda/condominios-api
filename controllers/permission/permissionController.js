const PermissionService = require('../../services/permissionService')

async function store (req, res, next) {

    permissionService = new PermissionService

    try{  

      let toCreate = {
        name: req.body.name
      }
      
      const permission = await permissionService.Create(toCreate)
      
      return res.success({data:permission,message:'Permission is created'},200)        
    }
    catch (error){    
      next(error)
    }
}


async function index (req, res, next) {
  
    permissionService = new PermissionService

    try {
        
        let permission = await permissionService.showAll({})
        
        return res.showAll(permission,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    permissionService = new PermissionService

    try{
        const permission = await permissionService.getOne({where: {id:req.params.id}})

        return res.showOne(permission,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name
  }

  permissionService = new PermissionService

  try{
    const permission = await permissionService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Permission is updated',
      data:permission
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    permissionService = new PermissionService

    try{
        
        await permissionService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Permission is deleted'
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