require('../plugins/passport/strategies/jwt')
const passport = require('passport')

module.exports = (req, res, next) => {

    passport.authenticate('jwt',(error, user, info) => {
        
        if (error){
            if (info.name === 'TokenExpiredError') return next(error)
            if (info.name === 'JsonWebTokenError') return next(error)
        }

        req.user = user
        
        return next()
    })(req, res, next)       
    
    
}