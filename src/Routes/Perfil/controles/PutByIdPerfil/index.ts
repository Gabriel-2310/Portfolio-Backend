import { NextFunction, Request, Response } from "express";
import Profile from "../../../../Models/Profile";


const putperfil = async(req: Request, res: Response, next: NextFunction) => {
    const { name, profession, position, skill, info, about, Social, coments } = req.body;
    const {id} = req.params;

    try { 
        await Profile.findByIdAndUpdate((id), { name, profession, position, skill, info, about, Social, coments });
        let updateprofile = await Profile.findById(id);
        res.status(200).json(updateprofile)
    } catch (error) {
        next(error)
    }
}

export default putperfil;