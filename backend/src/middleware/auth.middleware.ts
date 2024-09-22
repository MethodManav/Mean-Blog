import { Context } from "hono";

class AuthMiddleware {
  async authUser(c: Context) {
    // const userToken=c.header.

    return c.json({
      message: "jii",
    });
  }
}

export default new AuthMiddleware();
