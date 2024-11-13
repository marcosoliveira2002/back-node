import prisma from './infra/db';

export class DatabasePrisma {
  
  async list(search?: string) {
    return await prisma.categoriaProduto.findMany({
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
    return await prisma.categoriaProduto.create({
      data: tipo,
    });
  }

  async update(id: string, tipo: { nome_tipo_produto: string }) {
    return await prisma.categoriaProduto.update({
      where: { id },
      data: tipo,
    });
  }

  async delete(id: string) {
    return await prisma.categoriaProduto.delete({
      where: { id },
    });
  }
}
