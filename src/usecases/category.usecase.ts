import { CategoriaProdutoRepository } from "../controllers/category.controller";
import type { CategoriaProduto } from "../interfaces/category.interface";

class CategoriaProdutoUseCase {
  private categoriaProduto: CategoriaProdutoRepository;

  constructor() {
    this.categoriaProduto = new CategoriaProdutoRepository();
  }

  async create(categoria: string): Promise<CategoriaProduto> {
    const existing = await this.categoriaProduto.findFirst(categoria);
    if (existing) {
      throw new Error("Categoria já existe");
    }
    const result = await this.categoriaProduto.create({ categoria });
    return result;
  }

  async list(): Promise<CategoriaProduto[]> {
    const result = await this.categoriaProduto.findAll();
    return result;
  }
}

export { CategoriaProdutoUseCase };
