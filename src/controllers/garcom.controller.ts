import prisma from "../infra/db";
import type { Garcom, GarcomCreate, GarcomUpdate } from "../interfaces/garcom.interface";

class GarcomRepository {
  async create(data: GarcomCreate): Promise<Garcom> {
    const result = await prisma.garcom.create({
      data: {
        nome: data.nome,
        telefone: data.telefone,
        id_user: data.id_user,
      },
    });
    return result;
  }

  async list(): Promise<Garcom[]> {
    return prisma.garcom.findMany();
  }

  async update(id_garcom: string, data: Partial<GarcomUpdate>): Promise<Garcom> {
    const result = await prisma.garcom.update({
      where: { id_garcom },
      data,
    });
    return result;
  }

  async delete(id_garcom: string): Promise<Garcom> {
    const result = await prisma.garcom.delete({
      where: { id_garcom },
    });
    return result;
  }

  async findByUserId(id_user: string): Promise<Garcom | null> {
    return prisma.garcom.findFirst({
      where: { id_user },
    });
  }
}

export { GarcomRepository };
