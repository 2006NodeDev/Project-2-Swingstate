// import { Request, Response, NextFunction } from "express";
// import { logger } from "../utils/loggers";

// export function authenticationMiddleware(req:Request, res:Response, next:NextFunction){
//     if(!req.user) {
//         res.status(401).send('Please Login')
//     } else{
//         logger.debug(`user ${req.user.username} has a role of ${req.session.user.role.role}`);
//         next()
//     }
// }