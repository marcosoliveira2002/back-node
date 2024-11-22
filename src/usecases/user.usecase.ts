import { UserRepositoryPrisma } from "../controllers/user.controller";
import type { User, UserCreate } from "../interfaces/user.interface";

class UserUseCase {
  private user: UserRepositoryPrisma;

  constructor() {
    this.user = new UserRepositoryPrisma();
  }

  async create({ login, senha, tipo }: UserCreate): Promise<User> {
    const verify = await this.user.findByLogin(login);
    if (verify) {
      throw new Error("Usuário já existe");
    }
    const result = await this.user.create({ login, senha, tipo });
    return result;
  }

  async login(login: string, senha: string): Promise<User> {

    const user = await this.user.findByLogin(login);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }


    if (user.senha !== senha) {
      throw new Error("Senha incorreta");
    }

    return user;
  }
}

export { UserUseCase };
