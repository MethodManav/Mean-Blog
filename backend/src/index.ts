import { Hono } from "hono";
import { userRouter } from "./routes/user.route";
import { blogRouter } from "./routes/blog.route";
import { subjectRouter } from "./routes/subject.route";

const app = new Hono();
const path = "api/v1/";

app.route(`${path}user`, userRouter);
app.route(`${path}blog`, blogRouter);
app.route(`${path}subject`, subjectRouter);

export default app;
