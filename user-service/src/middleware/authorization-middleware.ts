import { Response, NextFunction } from "express";

//Do we need Authorization if we don't have roles??

export function authorizationMiddleware(roles: string[]){
    return (req:any, res:Response, next:NextFunction) => {
        let allowed = false
        for (const role of roles) {
            if(req.user.role === role){
                allowed = true
            }
        }
        
        if(allowed) {
            next()
        } else {
            res.status(401).send('The incoming token has expired');
        }
    }

}