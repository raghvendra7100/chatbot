import { z } from "zod";


export const signUpSchema =z.object({
    name:z.string().min(3 ,"Name is Reqired").max(100),
    email:z.string().min(3).max(100).email("invalid email"),
    password:z.string().min(8 , "password must be minimum 6 characters")
});