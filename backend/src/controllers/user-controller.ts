import userModel from "../models/userModel";
import User from "../models/userModel";
import bcrypt from "bcrypt";


const saltRounds = 5;
export const getAllUsers = async(req, res)=>{
    try{
        const users= await User.find({});
        return res.status(200).json({
            message:"List of users",
            users
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"ERROR" , 
            cause: error.message
        })
    }
}

export const signup = async(req, res )=>{
   
    try{
        const{name , email ,password} = req.body;
        const hashedPassword = await bcrypt.hash(password , saltRounds);
        
        const user = new User({name , email , password:hashedPassword}) // user instead of userModel.create

       await user.save();// create the user in the database ;
       return res.status(200).json({message : "ok" , id : user._id.toString()})
    }catch(error){
         console.log(error);
        return res.status(404).json({
            message:"ERROR while signing up",
            cause:error.message
        
    })
}
}