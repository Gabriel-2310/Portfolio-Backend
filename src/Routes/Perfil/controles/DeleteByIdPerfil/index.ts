import { NextFunction, Request, Response } from "express";
import Profile from "../../../../Models/Profile";


const deleteperfil = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;

    try { 
        const deleteperfil = await Profile.findByIdAndDelete(id);
        res.status(200).json(deleteperfil)
    } catch (error) {
        next(error)
    }
}

export default deleteperfil;