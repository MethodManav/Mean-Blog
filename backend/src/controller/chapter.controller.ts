import { Context } from "hono";
import chapterService from "../services/chapter.service";
import { SendResponse } from "../utilies/sendResponse";
import { HTTPException } from "hono/http-exception";

class ChaptersController {
  async createChapters(c: Context) {
    try {
      const { DATABASE_URL } = c.env;
      const body = await c.req.json();
      const dbChapter = await chapterService.create(DATABASE_URL, body);
      if (!dbChapter) {
        throw new Error("Something Went Wrong");
      }
      return SendResponse(c, 201, {
        success: true,
        data: dbChapter,
        message: "Subject Created Successfully",
      });
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
}

export default new ChaptersController();
