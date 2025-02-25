import { Hono } from "hono";
import { userRouter } from "./routes/user.route";
import { blogRouter } from "./routes/blog.route";
import { subjectRouter } from "./routes/subject.route";
import { chapterRouter } from "./routes/chapters.route";
import { notesRouter } from "./routes/note.route";
import { cors } from "hono/cors";

const app = new Hono();
const path = "api/v1/";
app.use("/api/*", cors());
app.route(`${path}user`, userRouter);
app.route(`${path}blog`, blogRouter);
app.route(`${path}subject`, subjectRouter);
app.route(`${path}chapter`, chapterRouter);
app.route(`${path}notes`, notesRouter);

export default app;
