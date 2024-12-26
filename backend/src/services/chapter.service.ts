import { client } from "../database/prismaClient";
import { createChapterDto } from "../interface/chapter.types";

class ChapterService {
  async create(url: string, chapter: createChapterDto): Promise<any> {
    const prismaClient = client(url);
    return await prismaClient.chapters.create({
      data: {
        name: chapter.name,
        subjectId: chapter.subject,
      },
    });
  }
}

export default new ChapterService();
