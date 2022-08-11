import { NextFunction, Request, Response } from "express";
import Proyect from "../../../../Models/Proyects";


const putproyects = async(req: Request, res: Response, next: NextFunction) => {
    const {title, date, description, image, tecnology, social, creator} = req.body;
    const {id} = req.params;

    try { 
        await Proyect.findByIdAndUpdate((id), {title, date, description, image, tecnology, social, creator});
        let updateproyect = await Proyect.findById(id);
        res.status(200).json(updateproyect)
    } catch (error) {
        next(error)
    }
}
export default putproyects;