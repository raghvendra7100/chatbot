 import { connectToDatabase } from "./db/connectTodb";
 import app from "./app"
 import {config } from "dotenv";
 config();

 connectToDatabase().then(()=>{
    app.listen(3000 , ()=> console.log("server open"));
 })
 .catch((err)=> console.log(err));
