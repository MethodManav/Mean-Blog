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
      return userdata;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserService();
