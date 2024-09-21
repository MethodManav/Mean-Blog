import { Hono } from "hono";
import userController from "../controller/userController";
import { Bindings } from "../interface/Types";

const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", userController.signUp);

export { userRouter };
