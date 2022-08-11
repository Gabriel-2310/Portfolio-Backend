import express from "express";
import cors from 'cors';
import router from './Routes/index';
import ErrorControl from "./Middlewares/controlerError";
import "./Config/MongoDB/index";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(ErrorControl);


export default app;
