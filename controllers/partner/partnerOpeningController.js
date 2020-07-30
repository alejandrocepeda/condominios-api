const OpeningsService = require('../../services/openingsService')

async function index (req, res, next) {
  
    openingsService = new OpeningsService

    try {
        
        let opening = await openingsService.showAll({
            where: {
                partner_id:req.params.id
            }
        })
        
        return res.showAll(opening,200)
    }
    catch (error){
        next(error)
    }
}



module.exports = {
  index
}