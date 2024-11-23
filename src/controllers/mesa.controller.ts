import prisma from "../infra/db";
import { Mesa, MesaController, MesaCreate } from "../interfaces/mesa.interface";

class MesaRepositoryPrisma implements MesaController {
  async create(data: MesaCreate): Promise<Mesa> {
    const result = await prisma.mesa.create({
      data: {
        numero_mesa: data.numero_mesa,
      },
    });
    return result;
  }

  async delete(id: string): Promise<void> {
    await prisma.mesa.delete({
      where: { id_mesa: id },
    });
  }

  async list(): Promise<Mesa[]> {
    const mesas = await prisma.mesa.findMany();
    return mesas;
  }
}

export { MesaRepositoryPrisma };
