import { client } from "../database/prismaClient";
import { createUser } from "../interface/user.types";

class UserService {
  async createUser(url: string, user: createUser) {
    const prismaClient = client(url);
    try {
      const userdata = await prismaClient.user.create({
        data: {
          email: user.email,
          name: user.name,
          password: user.password,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getUserByEmail(url: string, email: string) {
    const prismaClient = client(url);
    try {
      const existUser = await prismaClient.user.findUnique({
        where: {
          email: email,
        },
      });
      if (existUser) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default new UserService();
