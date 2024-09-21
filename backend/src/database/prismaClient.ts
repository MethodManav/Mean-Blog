import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";

export function client(c: string) {
  const prisma = new PrismaClient({
    datasourceUrl: c,
  }).$extends(withAccelerate());

  return prisma;
}
