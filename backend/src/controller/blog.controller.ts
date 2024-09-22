import { Context } from "hono";
import { createBlogs, UpdateBlog } from "../interface/blog.types";
import blogService from "../services/blog.service";

class BlogController {
  async createBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    let body: createBlogs = {
      ...(await c.req.json()),
      authorId: c.get("userId")?.id,
    };
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

  async updateBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const body: UpdateBlog = await c.req.json();
    const userId = c.get("userId");
    try {
      const blog = await blogService.updateByID(
        DATABASE_URL,
        body,
        Number(userId)
      );
      if (blog) {
        return c.json(
          {
            message: "Blog Updated Successfully",
            success: true,
          },
          201
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getBlogByID(c: Context) {
    const { DATABASE_URL } = c.env;
    const { id } = c.req.param();
    try {
      const blog = await blogService.getById(DATABASE_URL, parseInt(id));
      if (blog) {
        return c.json(
          {
            message: "Blog Find Successfully",
            success: true,
            data: blog,
          },
          201
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAllBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const { page } = c.req.param();
    try {
      const blog = await blogService.getAll(DATABASE_URL, parseInt(page));
      if (blog) {
        return c.json(
          {
            message: "Blog Find Successfully",
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
