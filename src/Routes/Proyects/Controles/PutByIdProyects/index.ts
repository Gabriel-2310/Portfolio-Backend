import { NextFunction, Request, Response } from "express";


const putproyects = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy un put")
    } catch (error) {
        next(error)
    }
}
export default putproyects;