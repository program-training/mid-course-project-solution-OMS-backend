import { NextFunction, Request, Response } from "express";
import { AppError } from "../BL/errorHandeling";


export const errorHandler = (error:AppError,req:Request, res:Response,next:NextFunction) =>{
    const {status, message} = error;
    res.status(status).send({message});
}