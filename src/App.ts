import express from "express";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());


app.use((err:any, _req:any, res:any, _next:any) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send({message});
});

export default app;
