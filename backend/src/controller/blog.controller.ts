import { Context } from "hono";
import { createBlogs, UpdateBlog } from "../interface/blog.types";
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
    }
  }

  async UpdatBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const body: UpdateBlog = await c.req.json();
    const { id } = await c.req.param();
    try {
      const blog = await blogService.updateByID(
        DATABASE_URL,
        body,
        parseInt(id)
      );
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
    }
  }
}

export default new BlogController();
