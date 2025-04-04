 import { connectToDatabase } from "./db/connectTodb";
 import app from "./utils/app"
 import {config } from "dotenv";
 config();

 connectToDatabase().then(()=>{
    app.listen(3000 , ()=> console.log("server open"));
 })
 
