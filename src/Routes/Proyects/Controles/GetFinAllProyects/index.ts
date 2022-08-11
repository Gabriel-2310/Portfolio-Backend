import { NextFunction, Request, Response } from "express";
import Proyect from "../../../../Models/Proyects";


const getproyects = async(_req: Request, res: Response, next: NextFunction) => {

    try { 
        const proyects = await Proyect.find();
        res.status(200).json(proyects)
    } catch (error) {
        next(error)
    }
}

export default getproyects;