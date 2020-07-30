import { Response, NextFunction } from "express";

//Do we need Authorization if we don't have roles??

export function authorizationMiddleware(roles: string[]){
    return (req:any, res:Response, next:NextFunction) => {
        let allowed = false
        for (const role of roles) {
            //if(req.session.user.role.role == roles){
            if(req.user.role === role){
                //console.log(role);
                allowed = true
                next()
            }
        }
        // if(req.user.user_id){
        //     let id = +req.params.user_id

        //     if(!isNaN(id)){
        //         //if(req.session.user.user_id == id) {
        //         if(req.user.userId == id) {
        //              allowed = true
        //         }
        //     }
        // }
        
        if(allowed) {
            next()
        } else {
            res.status(401).send('The incoming token has expired');
        }
    }

}