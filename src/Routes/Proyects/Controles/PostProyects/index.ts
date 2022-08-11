import { NextFunction, Request, Response } from "express";
import Proyect from "../../../../Models/Proyects";


const postproyects = async(req: Request, res: Response, next: NextFunction) => {
    const {title, date, description, image, tecnology, social, creator} = req.body;
    
    try { 
        let newproyect = new Proyect({title, date, description, image, tecnology, social, creator});
        newproyect = await newproyect.save(); 
        res.status(201).json(newproyect)
    } catch (error) {
        next(error)
    }
}
export default postproyects;
