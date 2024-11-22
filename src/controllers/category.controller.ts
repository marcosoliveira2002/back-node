import prisma from "../infra/db";
import type {
  CategoriaProduto,
  CategoriaProdutoController,
  CategoriaProdutoCreate,
} from "../interfaces/category.interface";

class CategoriaProdutoRepository implements CategoriaProdutoController {
  async create(data: CategoriaProdutoCreate): Promise<CategoriaProduto> {
    const result = await prisma.categoriaProduto.create({
      data: {
        categoria: data.categoria,
      },
    });
    return result;
  }

  async findAll(): Promise<CategoriaProduto[]> {
    const result = await prisma.categoriaProduto.findMany();
    return result;
  }
  async findFirst(categoria: string): Promise<CategoriaProduto | null> {
    const result = await prisma.categoriaProduto.findFirst({
      where: { categoria },
    });
    return result;
  }
}



export { CategoriaProdutoRepository };
