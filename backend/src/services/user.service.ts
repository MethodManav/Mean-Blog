import { client } from "../database/prismaClient";
import { createUser } from "../interface/user.types";

class UserService {
  async createUser(url: string, user: createUser): Promise<any> {
    const prismaClient = client(url);
    try {
      const userdata = await prismaClient.user.create({
        data: {
          email: user.email,
          name: user.name,
          password: user.password,
        },
      });
      return userdata;
    } catch (error) {
      console.log(error);
      return error;
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
        return existUser;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new UserService();
