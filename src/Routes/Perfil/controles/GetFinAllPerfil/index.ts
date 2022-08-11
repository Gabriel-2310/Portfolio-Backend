import { NextFunction, Request, Response } from "express";


const getperfil = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy get de perfil")
    } catch (error) {
        next(error)
    }
}
export default getperfil;