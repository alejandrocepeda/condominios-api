
function scopesValidation(allowScopes){

    return (req,res,next) => {

        if (!req.user || !req.user.scopes){            
            return res.error({
                message:'Unauthorized.'
            },401)
        }

        // the admin role has all permissions
        if (req.user.role.id == 1){
            next()
        }
        else{

            const permission = allowScopes.map((scope) => {
                return req.user.scopes.includes(scope)       
            })

            const hasAccess = !permission.includes(false)


            if (hasAccess){
                next()
            }
            else{
                return res.error({
                    message:'Unauthorized.'
                },401)
            }
        }
        
    }
}

module.exports = scopesValidation