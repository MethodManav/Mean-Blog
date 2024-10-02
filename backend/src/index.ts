import { Hono } from "hono";
import { userRouter } from "./routes/user.route";
import { blogRouter } from "./routes/blog.route";

const app = new Hono();
const path = "api/v1/";

app.route(`${path}user`, userRouter);
app.route(`${path}blog`, blogRouter);

export default app;
