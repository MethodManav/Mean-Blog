import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Context, Next } from "hono";

class S3Upload {
  async ImageUpload(c: Context, next: Next) {
    const formData = await c.req.formData();
    const files = formData.getAll("content");

    if (files.length === 0) {
      return c.json({ error: "At least one file is required" }, 400);
    }

    const { S3_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } =
      c.env;

    const s3Client = new S3Client({
      region: S3_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    const uploadedFiles = [];

    for (const file of files) {
      if (!(file instanceof File)) {
        return c.json({ error: "Invalid file format" }, 400);
      }

      const arrayBuffer = await file.arrayBuffer();
      const fileContent = new Uint8Array(arrayBuffer);

      const params = {
        Bucket: BUCKET_NAME,
        Key: `uploads/${Date.now()}-${file.name}`,
        Body: fileContent,
        ContentType: file.type,
      };

      try {
        const command = new PutObjectCommand(params);
        await s3Client.send(command);
        uploadedFiles.push(params.Key);
        c.set("imageKey", uploadedFiles);
      } catch (error) {
        console.error("Error uploading file:", error);
        return c.json({ error: "Error uploading one or more files" }, 500);
      }
    }
    await next();
  }
}

export default new S3Upload();
