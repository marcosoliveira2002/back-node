import { error } from "console";
import { UserRepositoryPrisma } from "../controllers/user.controller";
import type { User, UserCreate } from "../interfaces/user.interface";

class UserUseCase {
  private user: UserRepositoryPrisma;
  constructor(){
    this.user = new UserRepositoryPrisma();
  }

  async create({login, senha, tipo} : UserCreate): Promise<User> { 
    const verify = await this.user.findByLogin(login);
    if (verify) {
      throw new Error ('Usuario ja existe');
    }
    const result = await this.user.create({login, senha, tipo})
    return result
  }
} 

export { UserUseCase }