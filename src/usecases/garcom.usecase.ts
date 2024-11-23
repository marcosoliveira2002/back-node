import { GarcomRepository } from "../controllers/garcom.controller";
import type { Garcom, GarcomCreate, GarcomUpdate } from "../interfaces/garcom.interface";

class GarcomUseCase {
  private garcomRepo: GarcomRepository;

  constructor() {
    this.garcomRepo = new GarcomRepository();
  }

  async create({ nome, telefone, id_user }: GarcomCreate): Promise<Garcom> {
    const existingGarcom = await this.garcomRepo.findByUserId(id_user);
    if (existingGarcom) {
      throw new Error("Já existe um garçom vinculado a este usuário.");
    }
    return this.garcomRepo.create({ nome, telefone, id_user });
  }

  async list(): Promise<Garcom[]> {
    return this.garcomRepo.list();
  }

  async update(id: string, data: Partial<GarcomUpdate>): Promise<Garcom> {
    if (!data.nome && !data.telefone && !data.id_user) {
      throw new Error("Nenhum dado para atualizar foi fornecido.");
    }
    if (data.id_user && typeof data.id_user !== "string") {
      throw new Error("id_user inválido.");
    }
    return await this.garcomRepo.update(id, data);
  }

  async delete(id_garcom: string): Promise<Garcom> {
    return this.garcomRepo.delete(id_garcom);
  }
}

export { GarcomUseCase };
