const ProveedoresService = require('../../services/proveedoresService')

async function store (req, res, next) {

    proveedoresService = new ProveedoresService

    try{  

      let toCreate = {        
        name: req.body.name,        
        name: req.body.name,    
        nit: req.body.nit,
        direccion:req.body.direccion,
        licitaciones:req.body.licitaciones,
        referido: req.body.referido,
        telefono: req.body.telefono,
        celular:req.body.celular,
        correo:req.body.correo,
        sitio_web: req.body.sitio_web,
        categoria:req.body.categoria,
        cantidad:req.body.cantidad,
        conjunto_id:req.body.conjunto_id,
      }
      
      const category = await proveedoresService.Create(toCreate)
      
      return res.success({data:category,message:'Proveedor is created'},200)        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
  
    proveedoresService = new ProveedoresService

    try {
        
        const categories = await proveedoresService.showAll({})
        
        return res.showAll(categories,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    proveedoresService = new ProveedoresService

    try{
        const category = await proveedoresService.getOne({where: {id:req.params.id}})

        return res.showOne(category,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,        
    name: req.body.name,    
    nit: req.body.nit,
    direccion:req.body.direccion,
    licitaciones:req.body.licitaciones,
    referido: req.body.referido,
    telefono: req.body.telefono,
    celular:req.body.celular,
    correo:req.body.correo,
    sitio_web: req.body.sitio_web,
    categoria:req.body.categoria,
    cantidad:req.body.cantidad,
    conjunto_id:req.body.conjunto_id,
  }

  toUpdate = req.omit(toUpdate)

  proveedoresService = new ProveedoresService

  try{
    const category = await proveedoresService.Update({where: {id:req.params.id}},toUpdate)

    
    return res.success({
      message:'Proveedor is updated',
      data:category
    },200)
  }
  catch (error){
    next(error)
  }
}


async function destroy (req, res, next) {
  
    proveedoresService = new ProveedoresService

    try{
        
        await proveedoresService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Proveedor is deleted'
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