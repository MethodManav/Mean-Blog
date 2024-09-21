import { Hono } from "hono";
import userController from "../controller/userController";

const userRouter = new Hono();

userRouter.get("/", userController.SignUp);
// userRouter.post("/signup",())

export { userRouter };
