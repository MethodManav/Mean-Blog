import { Context } from "hono";
import { CreateNotes } from "../interface/note.types";
import noteService from "../services/note.service";
import { SendResponse } from "../utilies/sendResponse";
import { HTTPException } from "hono/http-exception";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

class notesController {
  async createNote(c: Context) {
    const { DATABASE_URL } = c.env;
    const responseBody = await c.req.formData();
    let getFileUrl = c.get("imageKey");
    let body: CreateNotes = {
      title: responseBody.get("title") as string,
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

  async getNote(c: Context) {
    const { S3_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } =
      c.env;
    const s3Client = new S3Client({
      region: S3_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
    const ObjectKey = c.req.param("noteKey");
    try {
      const getObjectUrl = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: `uploads/${ObjectKey}`,
      });

      const response = await s3Client.send(getObjectUrl);
      const stream = response.Body as ReadableStream;

      // Set headers for PDF response
      c.header("Content-Type", "application/pdf");
      c.header("Content-Disposition", `inline; filename="${ObjectKey}"`);

      //Convert the readableStream
      return c.newResponse(stream, {
        headers: c.res.headers,
      });
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
