// import { Request, Response, NextFunction } from "express";



// export function authorizationMiddleware(roles: string[], userId?: boolean){
//     return (req:Request, res:Response, next:NextFunction) => {
//         let allowed = false
       
//             if(req.user.role == roles){
//                 console.log(roles);
                
//                 allowed = true

//             }
//         if(userId){
//             let id = +req.params.userId

//             if(!isNaN(id)){
//                 if(req.user.userId == id) {
//                     allowed = true
//                 }
//             }
//         }
        
//         if(allowed){
//             next()
//         }else{
//             res.status(401).send('The incoming token has expired');
//         }
//     }

// }