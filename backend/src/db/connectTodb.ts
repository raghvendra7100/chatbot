import mongoose from "mongoose";
import {config}from "dotenv";
config();
import { MongoURI } from "../config/config";

  async  function connectToDatabase(){
  try{ 
     await mongoose.connect(MongoURI)
    }catch(error){
  console.log(error);
  throw new Error("Cannot connect to database");
}
  }

async function disconnectToDatabase(){
  try{
    await mongoose.disconnect();
  }catch(error){}
} 

export {connectToDatabase , disconnectToDatabase};