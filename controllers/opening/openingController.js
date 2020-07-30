const OpeningsService = require('../../services/openingsService')

async function store (req, res, next) {

    openingsService = new OpeningsService

    try{  

      let toCreate = {
        week_day: req.body.week_day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        pause_start: req.body.pause_start,
        pause_end: req.body.pause_end,
        partner_id: req.body.partner_id
      }
      
      const opening = await openingsService.Create(toCreate)
      
      return res.success({data: opening,message:'Partner opening is created'},200)        
    }
    catch (error){    
        next(error)
    }
}


async function index (req, res, next) {
  
    openingsService = new OpeningsService

    try {
        
        let opening = await openingsService.showAll({})
        
        return res.showAll(opening,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    openingsService = new OpeningsService

    try{
        const opening = await openingsService.getOne({where: {id:req.params.id}})

        return res.showOne(opening,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

    let toUpdate = {
        week_day: req.body.week_day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        pause_start: req.body.pause_start,
        pause_end: req.body.pause_end,
        partner_id: req.body.partner_id
    }

    toUpdate = req.omit(toUpdate)

    openingsService = new OpeningsService

    try{
        const opening = await openingsService.Update({where: {id:req.params.id}},toUpdate)

        return res.success({
            message:'Partner opening is updated',
            data: opening
        },200)
    }
    catch (error){
        next(error)
    }
}


async function destroy (req, res, next) {
  
    openingsService = new OpeningsService

    try{
        
        await openingsService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'Partner opening is deleted'
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