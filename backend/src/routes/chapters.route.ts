import { Hono } from "hono";
import { Bindings, Variables } from "hono/types";
import authMiddleware from "../middleware/auth.middleware";
import subjectController from "../controller/subject.controller";
import chapterController from "../controller/chapter.controller";

const chapterRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();
chapterRouter.post(
  "/create",
  authMiddleware.authUser,
  authMiddleware.isAdmin,
  chapterController.createChapters
);

export { chapterRouter };
