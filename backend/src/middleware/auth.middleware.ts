import { Context, Next } from "hono";
import { verify } from "hono/jwt";

class AuthMiddleware {
  async authUser(c: Context, next: Next) {
    const authHeader = c.req.header("authorization");
    const user = await verify(authHeader || "", c.env.JWT);
    if (user) {
      c.set("userId", user);
      await next();
    } else {
      return c.json(
        {
          message: "You Must Login First",
        },
        403
      );
    }
  }
}

export default new AuthMiddleware();
