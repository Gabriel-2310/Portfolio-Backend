import { NextFunction, Request, Response } from "express";


const postperfil = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy post de perfil")
    } catch (error) {
        next(error)
    }
}
export default postperfil;
