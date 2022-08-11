import { NextFunction, Request, Response } from "express";
import Profile from "../../../../Models/Profile";


const getperfil = async(_req: Request, res: Response, next: NextFunction) => {
    
    try { 
        const [profile] = await Profile.find();
        res.status(200).json(profile)
    } catch (error) {
        next(error)
    }
}

export default getperfil;