import { client } from "../database/prismaClient";
import { CreateNotes } from "../interface/note.types";

class noteService {
  async create(url: string, notes: CreateNotes): Promise<any> {
    const prismaClient = client(url);
    return await prismaClient.note.create({
      data: {
        title: notes.title,
        subjectId: notes.subjectId,
        userId: notes.userId,
        chapterId: notes.chapterId,
        content: notes.content,
      },
    });
  }
}

export default new noteService();
