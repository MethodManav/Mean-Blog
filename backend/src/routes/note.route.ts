import { Hono } from "hono";
import { Bindings, Variables } from "hono/types";
import notesController from "../controller/notes.controller";
import S3Middleware from "../middleware/S3.middleware";

const notesRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();
notesRouter.post("/", S3Middleware.ImageUpload, notesController.createNote);
notesRouter.get("/:noteKey", notesController.getNote);

export { notesRouter };
