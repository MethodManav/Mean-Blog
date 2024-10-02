import { client } from "../database/prismaClient";
import { createBlogs, UpdateBlog } from "../interface/blog.types";

class BlogService {
  async create(url: string, blogData: createBlogs): Promise<any> {
    const prismaClient = client(url);
    const blogCreate = await prismaClient.blogs.create({
      data: {
        authorId: blogData.authorId,
        title: blogData.title,
        content: blogData.content,
        published: blogData.published,
      },
    });
    return blogCreate;
  }
  async updateByID(url: string, blogData: UpdateBlog, id: number) {
    const prismaClient = client(url);
    try {
      const blog = await prismaClient.blogs.update({
        where: {
          id: id,
        },
        data: {
          title: blogData.title,
          content: blogData.content,
          published: blogData.published,
        },
      });
      return blog;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getById(url: string, id: number) {
    const prismaClient = client(url);
    try {
      const blog = await prismaClient.blogs.findFirst({
        where: {
          id: id,
        },
      });
      return blog;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAll(url: string, page: number) {
    const prismaClient = client(url);
    try {
      const allBlog = await prismaClient.blogs.findMany({
        skip: (page - 1) * 10,
        take: 10,
      });
      return allBlog;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new BlogService();
