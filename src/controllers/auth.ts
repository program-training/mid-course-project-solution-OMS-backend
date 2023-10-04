import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { validateToken as validateTokenBL } from "../BL/auth.js";


export const validateToken = async (req:Request,res:Response, next:NextFunction) =>{
    const token : string = req.headers['Authorization'] as string;
    if(!token || !validateTokenBL(token)) res.status(400).send('invalid token');
    return next();
}

export const validateAdminToken = async (req:Request, res:Response,next:NextFunction) =>{
    const token : string = req.headers['authorization'] as string;
    const decoded = await validateTokenBL(token);
    const isAdmin =  (decoded as JwtPayload)?.isAdmin ;
    if(!token || !decoded || !isAdmin) res.status(400).send('invalid token');
    else return next();
    
}