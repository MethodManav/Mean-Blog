import { Context } from "hono";
import userService from "../services/user.service";
import { sign } from "hono/jwt";

class UserController {
  async signUp(c: Context) {
    try {
      const { DATABASE_URL, JWT } = c.env;
      const body = await c.req.json();
      const UserExist = await userService.getUserByEmail(
        DATABASE_URL,
        body.email
      );
      if (UserExist) {
        return c.json(
          {
            message: "User Already Exists",
          },
          404
        );
      }

      let userCreate = await userService.createUser(DATABASE_URL, body);
      if (userCreate) {
        const token = await sign(
          {
            id: userCreate.id,
          },
          JWT
        );
        return c.json(
          {
            message: "User Created Successfully",
            success: true,
            token: token,
          },
          201
        );
      }
    } catch (error) {
      console.log(error);
      return c.json(
        {
          success: "false",
          Message: "Something Went Wrong",
          error: error,
        },
        500
      );
    }
  }
}

export default new UserController();
