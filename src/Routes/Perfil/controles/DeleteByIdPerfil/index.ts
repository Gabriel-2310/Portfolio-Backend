import { NextFunction, Request, Response } from "express";


const deleteperfil = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        res.status(200).json("hola soy delete de perfil")
    } catch (error) {
        next(error)
    }
}
export default deleteperfil;