import { NextFunction, Request, Response } from "express";


const deleteproyects = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy delete")
    } catch (error) {
        next(error)
    }
}
export default deleteproyects;