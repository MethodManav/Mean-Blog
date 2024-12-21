import { Context } from "hono";
import { createBlogsDTO, UpdateBlogDTO } from "../interface/blog.types";
import blogService from "../services/blog.service";
import { SendResponse } from "../utilies/sendResponse";
import { HTTPException } from "hono/http-exception";

class BlogController {
  async createBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const responseBody = await c.req.formData();

    let body: createBlogsDTO = {
      title: responseBody.get("title") as string,
      content: responseBody.get("content") as string,
      published: false,
      authorId: c.get("userId")?.id,
      images: c.get("imageKey"),
    };

    try {
      const blog = await blogService.create(DATABASE_URL, body);
      if (blog) {
        return SendResponse(c, 201, {
          data: blog,
          success: true,
          message: "Blog Created Successfully",
        });
      }
    } catch (error) {
      if (error instanceof HTTPException) {
        const statusCode = error.status;
        const errorMessage = error.message || "Internal Server Error";
        throw new HTTPException(statusCode, { message: errorMessage });
      } else {
        console.log(error);
        throw new HTTPException(500, { message: "Unknown error occurred" });
      }
    }
  }

  async updateBlog(c: Context) {
    const { DATABASE_URL } = c.env;
    const body: UpdateBlogDTO = await c.req.json();
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
        return SendResponse(c, 201, {
          message: "Blog Find Successfully",
          success: true,
          data: blog,
        });
      }
    } catch (error) {
      if (error instanceof HTTPException) {
        const statusCode = error.status;
        const errorMessage = error.message || "Internal Server Error";
        throw new HTTPException(statusCode, { message: errorMessage });
      } else {
        throw new HTTPException(500, { message: "Unknown error occurred" });
      }
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
