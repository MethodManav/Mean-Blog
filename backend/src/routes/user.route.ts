import { Hono } from "hono";
import userController from "../controller/userController";
import { Bindings } from "../interface/Types";

const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signUp", userController.signUp);

export { userRouter };
