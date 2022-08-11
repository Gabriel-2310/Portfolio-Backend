import { NextFunction, Request, Response } from "express";


const getproyects = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy get")
    } catch (error) {
        next(error)
    }
}
export default getproyects;