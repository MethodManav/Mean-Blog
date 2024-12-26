import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import subjectService from "../services/subject.service";
import { SendResponse } from "../utilies/sendResponse";

class SubjectController {
  async createSubject(c: Context) {
    try {
      const { DATABASE_URL } = c.env;
      const body = await c.req.json();
      const dbSubject = await subjectService.create(DATABASE_URL, body);
      if (!dbSubject) {
        throw new Error("Something Went Wrong");
      }
      return SendResponse(c, 201, {
        success: true,
        data: dbSubject,
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
  async getAllSubjectDetail(c: Context) {
    try {
      const { DATABASE_URL } = c.env;
      const allSubject = await subjectService.getAll(DATABASE_URL);
      if (!allSubject) {
        throw new Error("Something Went Wrong");
      }
      return SendResponse(c, 201, {
        success: true,
        data: allSubject,
        message: "Subject Retrieve Successfully",
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
export default new SubjectController();
