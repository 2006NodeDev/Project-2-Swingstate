import { Response, NextFunction } from "express";

export function authenticationMiddleware(req:any, res:Response, next:NextFunction){
    //if(!req.session.user) {
    if(!req.user) {
        res.status(401).send('Please Login')
    } else {
        //console.log(`user ${req.session.user.username} is logged in`); //has a role of ${req.session.user.role.role}`);
        console.log(`user ${req.user.username} has a role of ${req.user.role}`);
        next()
    }
}