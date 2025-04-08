import { z } from "zod";


export const signUpSchema =z.object({
    name:z.string().min(3 ,"Name is Reqired").max(100),
    email:z.string().min(3).max(100).email("invalid email"),
    password:z.string().min(8 , "password must be minimum 6 characters").max(100 , "password must not exceed 100 characters")
});

export const signInSchema  = z.object({
    email:z.string().min(3).max(100).email("invalid email"),
    password:z.string().min(8 , "passaword must be minimus of 8 characters").max(100, "password must not exceed 100 characters")
})