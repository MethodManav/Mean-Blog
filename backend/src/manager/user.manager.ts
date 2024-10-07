import { HTTPException } from "hono/http-exception";
import { client } from "../database/prismaClient";
import { createUser } from "../interface/user.types";
import userService from "../services/user.service";
import { hashPassword } from "../utilies/hashPassword";

class UserManager {
  async createUser(url: string, user: createUser): Promise<any> {
    try {
      const hashed = await hashPassword(user.password);
      user.password = hashed;
      console.log(user);
      const userData = await userService.create(url, user);
      if (!userData) {
        throw new HTTPException(401, {
          message: `UserManager => User Data Not Found`,
        });
      }
      return userData;
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

  async getUserByEmail(url: string, email: string) {
    try {
      const existUser = await userService.findByEmail(url, email);
      if (existUser) {
        return existUser;
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
}

export default new UserManager();
