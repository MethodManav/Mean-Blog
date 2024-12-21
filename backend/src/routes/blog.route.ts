import { Context, Hono } from "hono";
import { Bindings, Variables } from "../interface/Types";
import authMiddleware from "../middleware/auth.middleware";
import blogController from "../controller/blog.controller";
import S3Middleware from "../middleware/S3.middleware";

const blogRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();

blogRouter.use("/*", authMiddleware.authUser);
blogRouter.post("/post", S3Middleware.ImageUpload, blogController.createBlog);
blogRouter.put("/:id", blogController.updateBlog);
blogRouter.get("/:id", blogController.getBlogByID);
blogRouter.get("/bulk", blogController.getAllBlog);

export { blogRouter };
