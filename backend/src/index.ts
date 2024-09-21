import { Hono } from "hono";
import { userRouter } from "./routes/user.route";

const app = new Hono();

app.route("/api/v1/user", userRouter);

export default app;
