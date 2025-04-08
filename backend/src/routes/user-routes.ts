import {Router} from "express";
import { getAllUsers, login, signup } from "../controllers/user-controller";
const userRoutes = Router();
 
userRoutes.get("/" ,getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/login" , login)
export default userRoutes;