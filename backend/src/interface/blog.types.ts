export interface createBlogsDTO {
  authorId: number;
  title: string;
  content: string;
  images: string[];
  published: boolean;
}
export interface UpdateBlogDTO {
  title: string;
  content: string;
  published: boolean;
}
