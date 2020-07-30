const _ = require('lodash')
const RoleUserService = require('../../services/roleUserService')

async function store (req, res, next) {

    roleUserService = new RoleUserService

    try{  

      let toCreate = {
        role_id: req.body.role_id,
        user_id: req.body.user_id
      }
      
      const roleUser = await roleUserService.Create(toCreate)
      
      return res.success({data:roleUser,message:'Role User is created'},200)    
    }
    catch (error){    
      next(error)
    }
}

async function index (req, res, next) {
  
    roleUserService = new RoleUserService

    try {
        
        let roleUsers = await roleUserService.showAll({})
        
        return res.showAll(roleUsers,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    roleUserService = new RoleUserService

    try{
        const roleUser = await roleUserService.getOne({where: {id:req.params.id}})

        return res.showOne(roleUser,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  let toUpdate = {
    role_id: req.body.role_id,
    user_id: req.params.id
  }

  toUpdate = _(toUpdate).omit(_.isUndefined).omit(_.isNull).value(); 

  roleUserService = new RoleUserService

  try{
    
    await roleUserService.Delete({where: {user_id:req.params.id}})

    const roleUser = await roleUserService.Create(toUpdate)

    return res.success({
      message:'User Role is updated',
      data:roleUser
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    roleUserService = new RoleUserService

    try{
        
        await roleUserService.Delete({where: {id:req.params.id}})
        
        return res.success({
        message:'User Role is deleted'
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