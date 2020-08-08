// import { Request, Response, NextFunction } from "express";
// import { logger } from "../utils/loggers";
// export function authorizationMiddleware(roles: string[], userId?: boolean){
//     return (req:Request, res:Response, next:NextFunction) => {
//         let allowed = false
//             if(req.user.role == roles){
//                 logger.debug(roles);
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
//# sourceMappingURL=authorization-middleware.js.map