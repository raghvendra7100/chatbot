import {Router} from "express";
import userRoutes from "./user-routes";
import chatRouter from "./chat-routes";

const appRouter = Router();
appRouter.use("/user" , userRoutes); // api/v1/user
chatRouter.use("/chats" , chatRouter);// api/v1/chats
export default appRouter;