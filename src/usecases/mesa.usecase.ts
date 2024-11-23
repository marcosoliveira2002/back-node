import { Mesa, MesaCreate } from "../interfaces/mesa.interface";
import { MesaRepositoryPrisma } from "../controllers/mesa.controller";
import prisma from "../infra/db";

class MesaUseCase {
  private mesa: MesaRepositoryPrisma;

  constructor() {
    this.mesa = new MesaRepositoryPrisma();
  }

  async create(data: MesaCreate): Promise<Mesa> {
    const existingMesa = await prisma.mesa.findFirst({
      where: { numero_mesa: data.numero_mesa },
    });
    if (existingMesa) {
      throw new Error("Já existe uma mesa com este número.");
    }
    return await this.mesa.create(data);
  }

  async delete(id: string): Promise<void> {
    const existingMesa = await prisma.mesa.findUnique({
      where: { id_mesa: id },
    });
    if (!existingMesa) {
      throw new Error("Mesa não encontrada.");
    }
    await this.mesa.delete(id);
  }
  async list(): Promise<Mesa[]> {
    const result = await this.mesa.list();
    return result;
  }
}

export { MesaUseCase };
