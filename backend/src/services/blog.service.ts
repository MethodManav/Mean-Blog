import { client } from "../database/prismaClient";
import { createBlogs } from "../interface/blog.types";

class BlogService {
  async create(url: string, blogData: createBlogs): Promise<any> {
    const prismaClient = client(url);
    try {
      const blogCreate = await prismaClient.blogs.create({
        data: {
          authorId: blogData.authorId,
          title: blogData.title,
          content: blogData.content,
          published: blogData.published,
        },
      });
      return blogCreate;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new BlogService();
