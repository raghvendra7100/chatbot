import {Router} from "express";
import { getAllUsers, signup } from "../controllers/user-controller";
const userRoutes = Router();
 
userRoutes.get("/" ,getAllUsers);
userRoutes.post("/signup", signup);
export default userRoutes;