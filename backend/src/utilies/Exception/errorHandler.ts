import { Context } from "hono";

class GlobalError {
  async ErrorHandler(err: Error, c: Context): Promise<Response> {
    if (err instanceof APIError) {
      return c.json(
        {
          error: err.name,
          message: err.message,
        },
        err.httpCode
      );
    } else {
      return c.json(
        {
          error: "InternalServerError",
          message: "Something went wrong",
        },
        500
      );
    }
  }
}

export default new GlobalError();
