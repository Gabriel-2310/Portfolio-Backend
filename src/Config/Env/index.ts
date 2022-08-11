import dotenv from "dotenv";
dotenv.config();

export default {
  Db: process.env.URI,
};