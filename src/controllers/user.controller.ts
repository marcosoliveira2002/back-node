import prisma from "../infra/db";
import type { User, UserController, UserCreate } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserController {
  async create(data: UserCreate): Promise<User> {
    const result = await prisma.user.create({
      data: {
        login: data.login,
        senha: data.senha,
        tipo: data.tipo,
      },
    });
    return result;
  }
async findByLogin(login: string): Promise<User | null> {
  const result = await prisma.user.findFirst({
    where: {
      login,
    },
  });
  return result || null
}

async list(): Promise<User[]> {
  const mesas = await prisma.user.findMany();
  return mesas;
}

}

export { UserRepositoryPrisma };