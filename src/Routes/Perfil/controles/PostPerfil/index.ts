import { NextFunction, Request, Response } from "express";
import Profile from "../../../../Models/Profile";


const postperfil = async(req: Request, res: Response, next: NextFunction) => {
    const { name, profession, position, skill, info, about, Social, coments } = req.body;
    
    try { 
        let newprofile = new Profile({ name, profession, position, skill, info, about, Social, coments });
        newprofile = await newprofile.save(); 
        res.status(201).json(newprofile)
    } catch (error) {
        next(error)
    }
}

export default postperfil;
