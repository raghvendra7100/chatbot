 import express from "express";
 import dotenv from 'dotenv'; 
 dotenv.config();
 import morgan from "morgan";
 import appRouter from "./routes";
 import cookieParser from "cookie-parser";
import { cookie_key } from "./config/config";
 
 console.log("Loaded Cookie Key:", process.env.cookie_key);

 const app = express();
 app.use(express.json());
 app.use(cookieParser(process.env.cookie_key))
 app.use(morgan("dev"));
 
 app.use("/api/v1" , appRouter);


 
 export default app;
 