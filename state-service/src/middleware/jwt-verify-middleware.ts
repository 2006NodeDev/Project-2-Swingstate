import { Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const JWTVerifyMiddleware = (req:any, res:Response, next:NextFunction) => {
    try {
        let token = req.headers.authorization?.split(' ').pop()
        if (token) {
            req.user = jwt.verify(token, process.env['SECRET'])
        }
        next()
    } catch(e) {
        console.log(e);
        next(e)
    }
}