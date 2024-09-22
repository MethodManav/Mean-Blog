import { Context } from "hono";
import { createBlogs } from "../interface/blog.types";
import blogService from "../services/blog.service";

class BlogController {
  async createBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const body: createBlogs = await c.req.json();
    try {
      const blog = await blogService.create(DATABASE_URL, body);
      if (blog) {
        return c.json(
          {
            message: "Blog Created Successfully",
            success: true,
          },
          201
        );
      }
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  }
}

export default new BlogController();
