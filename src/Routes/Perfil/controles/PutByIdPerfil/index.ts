import { NextFunction, Request, Response } from "express";


const putperfil = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy un put de perfil")
    } catch (error) {
        next(error)
    }
}
export default putperfil;