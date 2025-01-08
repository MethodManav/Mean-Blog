import { Hono } from "hono";
import { Bindings, Variables } from "hono/types";
import subjectController from "../controller/subject.controller";
import authMiddleware from "../middleware/auth.middleware";

const subjectRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();

subjectRouter.post(
  "/",
  authMiddleware.authUser,
  authMiddleware.isAdmin,
  subjectController.createSubject
);
subjectRouter.get("/getAll", subjectController.getAllSubjectDetail);
export { subjectRouter };
