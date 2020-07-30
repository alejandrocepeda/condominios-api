const RoleService = require('../../services/roleService')

async function store (req, res, next) {

    roleService = new RoleService

    try{  

      let toCreate = {
        name: req.body.name
      }
      
      const role = await roleService.Create(toCreate)
      
      return res.success({data:role,message:'Role is created'},200)        
    }
    catch (error){    
      next(error)
    }
}


async function index (req, res, next) {
  
    roleService = new RoleService

    try {
        
        let roles = await roleService.showAll({})
        
        return res.showAll(roles,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    roleService = new RoleService

    try{
        const role = await roleService.getOne({where: {id:req.params.id}})

        return res.showOne(role,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    name: req.body.name
  }

  roleService = new RoleService

  try{
    const role = await roleService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'Role is updated',
      data:role
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    roleService = new RoleService

    try{
        
        await roleService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Role is deleted'
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