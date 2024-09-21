import { Context } from "hono";
import userService from "../services/user.service";

class UserController {
  async signUp(c: Context) {
    const env = c.env.DATABASE_URL;
    const body = await c.req.json();
    const data = await userService.createUser(env, body);
    return c.json({
      message: data,
    });
  }
}

export default new UserController();
