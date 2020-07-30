const _ = require('lodash')
const bcrypt = require('bcrypt')
const UserService = require('../../services/userService')
const RoleUserService = require('../../services/roleUserService')
const { config } = require('../../config/index')

async function store (req, res, next) {

  userService = new UserService

  try{  

    const user = await userService.showAll({where:{email: req.body.email}})

    if (user.length >= 1) {
      
      return res.success({
        message:'User is already exists',
        data:user[0]
      },422)    

    }
    else{    

      const hash = await bcrypt.hash(req.body.password, 10)

      let toCreate = {
        name: req.body.name,
        email: req.body.email,
        client_id:parseInt(req.body.client_id),
        password:hash
      }
      
      const user = await userService.Create(toCreate)

      roleUserService = new RoleUserService

      /*
      //set role id 4 (Guest) by default
      await roleUserService.Create({
          role_id:(!req.body.role_id ? 4:parseInt(req.body.role_id)),
          user_id:user.id
      })
      */
      /*
      let Mail = require('../../plugins/sendgrid/index')

      const options = {
        to: user.email,
        from: config.supportMail,
        subject: 'Welcome to Ikeko 👋',
        text: 'Quality streaming video. Any time', 
        templateName:'welcome.html'
      }

      Mail.send(options)
      */

      return res.success({data:user,message:'User is created'},200)    
    }
  }
  catch (error){    
    next(error)
  }
}

async function index (req, res, next) {
  
  userService = new UserService

  try {
      
      let users = []
      users = await userService.showAll({})
      
      return res.showAll(users,200)
  }
  catch (error){
    next(error)
  }
}

async function show (req, res, next) {
  
  userService = new UserService

  try{
    const user = await userService.getOne({where: {id:req.params.id}})

    return res.showOne(user,200)
  }
  catch (error ){
    next(error)
  }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    email: req.body.email,
    client_id:req.body.client_id
  }
  

  if (req.body.password){
    const hash = await bcrypt.hash(req.body.password, 10)

    toUpdate.password = hash
  }

  toUpdate = _(toUpdate).omit(_.isUndefined).omit(_.isNull).value(); 

  userService = new UserService

  try{
    const user = await userService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'User is updated',
      data:user
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
  userService = new UserService

  try{
    
    await userService.Delete({where: {id:req.params.id}})
    
    return res.success({
      message:'User is deleted'
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