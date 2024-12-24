import { Context, Next } from "hono";
import { verify } from "hono/jwt";
import { SendResponse } from "../utilies/sendResponse";

class AuthMiddleware {
  async authUser(c: Context, next: Next) {
    try {
      const authHeader = c.req.header("authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return c.json(
          { message: "Invalid or Missing Authorization Header" },
          401
        );
      }

      const authToken = authHeader.split(" ")[1];
      if (!authToken) {
        return c.json({ message: "Invalid Token Format" }, 401);
      }

      let user;
      try {
        user = await verify(authToken, c.env.JWT);
      } catch (verifyError) {
        console.error("JWT Verification Failed:", verifyError);
        return c.json({ message: "Invalid or Expired Token" }, 403);
      }
      if (!user || typeof user !== "object") {
        console.error("Unexpected JWT Payload:", user);
        return c.json({ message: "Invalid Token Payload" }, 403);
      }
      c.set("userId", user);
      c.set("role", user.role);
      await next();
    } catch (error: any) {
      console.error("Authentication Error:", error);
      return c.json(
        {
          message: "Authentication Failed",
          error: error.message || "Unknown Error",
        },
        500
      );
    }
  }
  async isAdmin(c: Context, next: Next) {
    const getRole = c.get("role");
    console.log(getRole);
    if (c.get("role") != "admin") {
      return SendResponse(c, 400, {
        success: false,
        data: {},
        message: "Forbidden ",
      });
    }
    await next();
  }
}

export default new AuthMiddleware();
