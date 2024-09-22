import { Hono } from "hono";
import userController from "../controller/user.controller";
import { Bindings, Variables } from "../interface/Types";

const userRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();

userRouter.post("/signup", userController.signUp);

export { userRouter };
