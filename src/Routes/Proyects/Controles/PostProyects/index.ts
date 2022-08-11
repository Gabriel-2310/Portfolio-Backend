import { NextFunction, Request, Response } from "express";


const postproyects = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy post")
    } catch (error) {
        next(error)
    }
}
export default postproyects;
