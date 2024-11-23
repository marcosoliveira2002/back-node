import prisma from "../infra/db";
import type { Produto, ProdutoController, ProdutoCreate } from "../interfaces/product.interface";

class ProdutoRepository implements ProdutoController {
  async create(data: ProdutoCreate): Promise<Produto> {
    const result = await prisma.produto.create({
      data: {
        nome_produto: data.nome_produto,
        preco: data.preco,
        id_categoria_produto: data.id_categoria_produto,
      },
    });
    return result;
  }

  async findByName(nome_produto: string): Promise<Produto | null> {
    const result = await prisma.produto.findFirst({
      where: { nome_produto },
    });
    return result || null;
  }

  async findById(id_produto: string): Promise<Produto | null> {
    const result = await prisma.produto.findUnique({
      where: { id_produto },
    });
    return result || null;
  }

  async findAll(): Promise<Produto[]> {
    const result = await prisma.produto.findMany();
    return result;
  }

  async update(
    id_produto: string,
    data: Partial<ProdutoCreate>
  ): Promise<Produto> {
    const result = await prisma.produto.update({
      where: { id_produto },
      data,
    });
    return result;
  }

  async delete(id_produto: string): Promise<void> {
    await prisma.produto.delete({
      where: { id_produto },
    });
  }
}

export { ProdutoRepository };
