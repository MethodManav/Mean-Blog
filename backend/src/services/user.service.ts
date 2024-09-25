import { client } from "../database/prismaClient";
import { createUser } from "../interface/user.types";

class UserService {
  async create(url: string, user: createUser): Promise<any> {
    const prismaClient = client(url);
    return await prismaClient.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
  }
  async findByEmail(url: string, email: string) {
    const prismaClient = client(url);
    return await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}

export default new UserService();
