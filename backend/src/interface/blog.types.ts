export interface createBlogs {
  authorId: number;
  title: string;
  content: string;
  published: boolean;
}
export interface UpdateBlog {
  title: string;
  content: string;
  published: boolean;
}
