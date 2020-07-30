const CategoriesServices = require('../../services/categoriesServices')

async function store (req, res, next) {

    categoriesServices = new CategoriesServices

    try{  

      let toCreate = {        
        name: req.body.name
      }
      
      const category = await categoriesServices.Create(toCreate)
      
      return res.success({data:category,message:'Category is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    categoriesServices = new CategoriesServices

    try {
        
        const categories = await categoriesServices.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    categoriesServices = new CategoriesServices

    try{
        const category = await categoriesServices.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name
  }

  toUpdate = req.omit(toUpdate)

  categoriesServices = new CategoriesServices

  try{
    const category = await categoriesServices.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Category is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    categoriesServices = new CategoriesServices

    try{
        
        await categoriesServices.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Category is deleted'
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