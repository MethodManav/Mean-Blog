import { Context } from "hono";
import userService from "../services/user.service";
import { sign } from "hono/jwt";
import userManager from "../manager/user.manager";
import { SendResponse } from "../utilies/sendResponse";
import { HTTPException } from "hono/http-exception";
import { verifyPassword } from "../utilies/verifyPassword";

class UserController {
  async signUp(c: Context) {
    try {
      const { DATABASE_URL, JWT } = c.env;
      const body = await c.req.json();
      const user = await userManager.getUserByEmail(DATABASE_URL, body.email);
      if (user) {
        return SendResponse(c, 404, {
          success: false,
          data: {},
          message: "User Already Exists",
        });
      }
      const userCreate = await userManager.createUser(DATABASE_URL, body);
      if (userCreate) {
        return c.json(
          {
            message: "User Created Successfully",
            success: true,
          },
          201
        );
      }
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

  async signIn(c: Context) {
    try {
      const { DATABASE_URL, JWT } = c.env;
      const body = await c.req.json();
      const user = await userManager.getUserByEmail(DATABASE_URL, body.email);
      if (!user) {
        return SendResponse(c, 404, {
          success: false,
          data: {},
          message: "User Does Not  Exists",
        });
      }
      const checkPassword = await verifyPassword(body.password, user.password);
      if (!checkPassword) {
        return SendResponse(c, 404, {
          success: false,
          data: {},
          message: "Incorrect Password",
        });
      }
      const token = await sign(
        {
          id: user.id,
        },
        JWT
      );
      return SendResponse(c, 201, {
        success: true,
        data: token,
        message: `User Signin Successfully`,
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

export default new UserController();
