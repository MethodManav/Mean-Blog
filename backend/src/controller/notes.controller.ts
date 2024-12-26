import { Context } from "hono";
import { CreateNotes } from "../interface/note.types";
import noteService from "../services/note.service";
import { SendResponse } from "../utilies/sendResponse";
import { HTTPException } from "hono/http-exception";

class notesController {
  async createNote(c: Context) {
    const { DATABASE_URL } = c.env;
    const responseBody = await c.req.formData();
    let getFileUrl = c.get("imageKey");
    let body: CreateNotes = {
      title: responseBody.get("title") as string,
      subjectId: parseInt(responseBody.get("subjectId") as string),
      chapterId: parseInt(responseBody.get("chapterId") as string),
      userId: parseInt(responseBody.get("userId") as string),
      content: c.get("imageKey"),
    };
    try {
      const dbNotes = await noteService.create(DATABASE_URL, body);
      if (dbNotes) {
        return SendResponse(c, 201, {
          data: dbNotes,
          success: true,
          message: "Notes Uploaded Successfully",
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
}

export default new notesController();
