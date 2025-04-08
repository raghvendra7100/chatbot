import userModel from "../models/userModel";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { signInSchema, signUpSchema } from "../utils/validators";
import { createToken } from "../utils/token-manager";
import { Cookie_Name } from "../utils/constants";
const saltRounds = 5;
//api/v1/user
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

//api/v1/user/signup
export const signup = async(req, res )=>{
   
    try{

        const result = signUpSchema.safeParse(req.body);

        if(!result.success){
            const error= result.error.format();
            return res.status(400).json({message: "Validation Error", error})
        }


        const{name , email ,password} = req.body;
        const hashedPassword = await bcrypt.hash(password , saltRounds);
        
        const user = new User({name , email , password:hashedPassword}) // user instead of userModel.create

       await user.save();// create the user in the database ;
       return res.status(201).json({message : "ok" , id : user._id.toString()})
    }catch(error){
         console.log(error);
        return res.status(404).json({
            message:"ERROR while signing up",
            cause:error.message
        
    })
}
}

export const login = async(req ,res)=>{

    try{
        const result  = signInSchema.safeParse(req.body);
        if(!result.success){
            const error = result.error;
            return res.status(400).json("Error while trying to login",
                error
            )
        }
        
    const {email , password } = req.body;
    const response = await User.findOne({
        email
    })
    if(!response){
        return res.status(400).json({
            message: "User does not exist."
        })
    }

    const passwordMatch = await bcrypt.compare(password , response.password);
    if(!passwordMatch){
        return res.status(400).json({
            message: "Wrong email or password!"
        })   
    };
   
    res.clearCookie(Cookie_Name , {
        httpOnly:true,
        domain: "localhost",
        signed: true,
        path:"/"
    }); // clearing the cookie of previous login if any.


   const token = createToken(response._id.toString() , email , "1d")
   const expires = new Date();
   expires.setDate(expires.getDate() + 1)
   
   res.cookie(Cookie_Name , token , {
    path:"/",
    domain:"localhost",
    expires,
    httpOnly: true,
    signed :true
   })
   
   
   
   return res.status(200).json({
        message:"logged in"
    })

    
    }catch(error){
        console.log("Login error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            cause: error.message
        });
}   
}