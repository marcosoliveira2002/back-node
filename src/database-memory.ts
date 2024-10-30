import prisma from './infra/db';

export class DatabasePrisma {
  async list(search?: string) {
    return await prisma.tipo.findMany({
      where: search
        ? {
            nome_tipo_produto: {
              contains: search,
            },
          }
        : {},
    });
  }

  async create(tipo: { nome_tipo_produto: string }) {
    return await prisma.tipo.create({
      data: tipo,
    });
  }

  async update(id: string, tipo: { nome_tipo_produto: string }) {
    return await prisma.tipo.update({
      where: { id },
      data: tipo,
    });
  }

  async delete(id: string) {
    return await prisma.tipo.delete({
      where: { id },
    });
  }
}
