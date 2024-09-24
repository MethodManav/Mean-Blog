import { Hono } from "hono";
import { userRouter } from "./routes/user.route";
import { blogRouter } from "./routes/blog.route";
import GlobalError from "./utilies/Exception/errorHandler";

const app = new Hono();
const path = "api/v1/";

app.onError((err, c) => GlobalError.ErrorHandler(err, c));
app.route(`${path}user`, userRouter);
app.route(`${path}blog`, blogRouter);

export default app;
