const SpecialOpeningService = require('../../services/specialOpeningsService')

async function store (req, res, next) {

    SpecialOpeningService = new SpecialOpeningService

    try{  

      let toCreate = {
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        pause_start: req.body.pause_start,
        pause_end: req.body.pause_end,
        partner_id: req.body.partner_id
      }
      
      const opening = await SpecialOpeningService.Create(toCreate)
      
      return res.success({data: opening,message:'Partner opening is created'},200)        
    }
    catch (error){    
        next(error)
    }
}


async function index (req, res, next) {
  
    SpecialOpeningService = new SpecialOpeningService

    try {
        
        let opening = await SpecialOpeningService.showAll({})
        
        return res.showAll(opening,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    SpecialOpeningService = new SpecialOpeningService

    try{
        const opening = await SpecialOpeningService.getOne({where: {id:req.params.id}})

        return res.showOne(opening,200)
    }
    catch (error ){
        next(error)
    }
}

async function update (req, res, next) {

    let toUpdate = {
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        pause_start: req.body.pause_start,
        pause_end: req.body.pause_end,
        partner_id: req.body.partner_id
    }

    toUpdate = req.omit(toUpdate)

    SpecialOpeningService = new SpecialOpeningService

    try{
        const opening = await SpecialOpeningService.Update({where: {id:req.params.id}},toUpdate)

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
  
    SpecialOpeningService = new SpecialOpeningService

    try{
        
        await SpecialOpeningService.Delete({where: {id:req.params.id}})
        
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