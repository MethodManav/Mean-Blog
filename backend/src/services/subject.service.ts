import { client } from "../database/prismaClient";
import { CreateSubject } from "../interface/subject.types";

class SubjectService {
  async create(url: string, subject: CreateSubject): Promise<any> {
    const prismaClient = client(url);
    return await prismaClient.subject.create({
      data: {
        name: subject.name,
        description: subject.description,
      },
    });
  }
  async getAll(url: string) {
    const prismaClient = client(url);
    return await prismaClient.subject.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: {
        Chapters: {
          include: {
            Note: true,
          },
        },
      },
    });
  }
}

export default new SubjectService();
