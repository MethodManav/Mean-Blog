import { Context, Hono } from "hono";
import { Bindings } from "../interface/Types";
import authMiddleware from "../middleware/auth.middleware";
import blogController from "../controller/blog.controller";

const blogRouter = new Hono<{ Bindings: Bindings }>();

// blogRouter.use("/*", authMiddleware.authUser);
blogRouter.post("/post", blogController.createBlog);

export { blogRouter };
