import {  NextFunction, Request, Response } from "express";


const ErrorControl = (err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({message});
  }
export default ErrorControl;