import mongoose from "mongoose";
import {randomUUID} from "crypto";
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    id: {type : String  , default:randomUUID()},
    role:{type: String , required: true},
    content:{type: String , required: true}
})
const userSchema = new Schema({
    name: {type : String  , required: true},
    email: {type : String  , required: true , unique:true},
    password: {type : String  , required: true}, 
    chats:[chatSchema]
})
const userModel = mongoose.model("User" , userSchema);
export default userModel;
