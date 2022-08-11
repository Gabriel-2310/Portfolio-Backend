import { NextFunction, Request, Response } from "express";
import Proyect from "../../../../Models/Proyects";


const deleteproyects = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;

    try { 
        const deleteproyect = await Proyect.findByIdAndDelete(id);
        res.status(200).json(deleteproyect)
    } catch (error) {
        next(error)
    }
}

export default deleteproyects;